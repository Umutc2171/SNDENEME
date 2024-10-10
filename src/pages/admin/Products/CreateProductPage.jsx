import { Button, Form, Input, InputNumber, Select, Spin, message, Upload } from "antd";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { PlusOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";

const CreateProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/categories`);
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [apiUrl]);

  const onFinish = async (values) => {
    setLoading(true);
    const formData = new FormData();
    
    formData.append("name", values.name);
    formData.append("category", values.category);
    formData.append("price[current]", values.current);
    formData.append("price[discount]", values.discount);
    formData.append("description", values.description);

    fileList.forEach(file => {
      formData.append("images", file.originFileObj);
    });

    try {
      const response = await fetch(`${apiUrl}/api/products`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        message.success("Ürün başarıyla oluşturuldu.");
        form.resetFields();
        setFileList([]);
      } else {
        message.error("Ürün oluşturulurken bir hata oluştu.");
      }
    } catch (error) {
      console.log("Ürün oluşturma hatası:", error);
      message.error("Ürün oluşturulurken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  const handleUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Fotoğraf Yükle</div>
    </div>
  );
  

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Ürün İsmi"
          name="name"
          rules={[
            {
              required: true,
              message: "Lütfen Ürün adını girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ürün Kategorisi"
          name="category"
          rules={[
            {
              required: true,
              message: "Lütfen 1 kategori seçin!",
            },
          ]}
        >
          <Select>
            {categories.map((category) => (
              <Select.Option value={category._id} key={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Fiyat"
          name="current"
          rules={[
            {
              required: true,
              message: "Lütfen ürün fiyatını girin!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="İndirim Oranı"
          name="discount"
          rules={[
            {
              required: true,
              message: "Lütfen bir ürün indirim oranı girin!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Ürün Açıklaması"
          name="description"
          rules={[
            {
              required: true,
              message: "Lütfen bir ürün açıklaması girin!",
            },
          ]}
        >
          <ReactQuill
            theme="snow"
            style={{ backgroundColor: "white" }}
          />
        </Form.Item>
        
        <Form.Item
  label="Ürün Görselleri"
  name="images"
  rules={[
    {
      validator: () => {
        if (fileList.length < 4) {
          return Promise.reject(new Error("Lütfen en az 4 ürün görseli yükleyin!"));
        }
        return Promise.resolve();
      },
    },
  ]}
>
  <Upload
    listType="picture-card"
    fileList={fileList}
    onChange={handleUploadChange}
    beforeUpload={() => false} // Dosyayı doğrudan yüklemek yerine, formda yönetilecektir.
  >
    {fileList.length >= 4 ? null : uploadButton}
  </Upload>
</Form.Item>
        <Button type="primary" htmlType="submit">
          Oluştur
        </Button>
      </Form>
    </Spin>
  );
};

export default CreateProductPage;
