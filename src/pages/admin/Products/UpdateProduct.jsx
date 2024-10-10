import { Button, Form, Input, InputNumber, Select, Spin, message, Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import { PlusOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";

const UpdateProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [fileList, setFileList] = useState([]);  
  const [existingImages, setExistingImages] = useState([]);  
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const [categoriesResponse, singleProductResponse] = await Promise.all([
          fetch(`${apiUrl}/api/categories`),
          fetch(`${apiUrl}/api/products/${productId}`),
        ]);

        if (!categoriesResponse.ok || !singleProductResponse.ok) {
          message.error("Veri getirme başarısız.");
          return;
        }

        const [categoriesData, singleProductData] = await Promise.all([
          categoriesResponse.json(),
          singleProductResponse.json(),
        ]);

        setCategories(categoriesData);

        if (singleProductData) {
          form.setFieldsValue({
            name: singleProductData.name,
            current: singleProductData.price.current,
            discount: singleProductData.price.discount,
            description: singleProductData.description,
            category: singleProductData.category,
          });
          setExistingImages(singleProductData.img); 
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl, productId, form]);

  const handleUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleRemoveExistingImage = (index) => {
    const newImages = [...existingImages];
    const removedImage = newImages[index]; 

    newImages.splice(index, 1);
    setExistingImages(newImages);

    fetch(`${apiUrl}/api/products/${productId}}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: removedImage }),
    }).then(response => {
      if (!response.ok) {
        message.error("Görsel silinirken hata oluştu.");
      }
    }).catch(error => {
      console.error("Silme hatası:", error);
    });
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Fotoğraf Yükle</div>
    </div>
  );

  const onFinish = async (values) => {
    setLoading(true);
    const formData = new FormData();
    
    // Form verilerini FormData'ya ekliyoruz
    formData.append("name", values.name);
    formData.append("category", values.category);
    formData.append("price[current]", values.current);
    formData.append("price[discount]", values.discount);
    formData.append("description", values.description);
    
    // Mevcut görselleri ekliyoruz
    existingImages.forEach((img) => {
      formData.append("existingImages", img);
    });

    // Yeni yüklenen görselleri ekliyoruz
    fileList.forEach(file => {
      formData.append("newImages", file.originFileObj);
    });
  
    try {
      const response = await fetch(`${apiUrl}/api/products/${productId}`, {
        method: "PUT",
        body: formData,
      });
  
      if (response.ok) {
        message.success("Ürün başarıyla güncellendi.");
        navigate("/admin/products");
      } else {
        message.error("Ürün güncellenirken bir hata oluştu.");
      }
    } catch (error) {
      console.log("Ürün güncelleme hatası:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Ürün İsmi"
          name="name"
          rules={[{ required: true, message: "Lütfen Ürün adını girin!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ürün Kategorisi"
          name="category"
          rules={[{ required: true, message: "Lütfen 1 kategori seçin!" }]}
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
          rules={[{ required: true, message: "Lütfen ürün fiyatını girin!" }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="İndirim Oranı"
          name="discount"
          rules={[{ required: true, message: "Lütfen bir ürün indirim oranı girin!" }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Ürün Açıklaması"
          name="description"
          rules={[{ required: true, message: "Lütfen bir ürün açıklaması girin!" }]}
        >
          <ReactQuill
            theme="snow"
            style={{ backgroundColor: "white" }}
          />
        </Form.Item>

        {/* Mevcut görselleri gösterme ve silme */}
        <Form.Item label="Mevcut Ürün Görselleri">
          <div>
            {existingImages.map((img, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <img src={img} alt={`existing-${index}`} style={{ width: "100px", marginRight: "10px" }} />
                <Button type="danger" onClick={() => handleRemoveExistingImage(index)}>
                  Sil
                </Button>
              </div>
            ))}
          </div>
        </Form.Item>

        {/* Yeni görselleri yükleme */}
        <Form.Item
          label="Yeni Ürün Görselleri"
          name="newImages"
        >
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleUploadChange}
            beforeUpload={() => false} 
          >
            {fileList.length >= 4 ? null : uploadButton}
          </Upload>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Güncelle
        </Button>
      </Form>
    </Spin>
  );
};

export default UpdateProductPage;
