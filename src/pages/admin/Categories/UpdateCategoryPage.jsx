import { Button, Form, Input, Spin, Upload, message } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";

const UpdateCategoryPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const params = useParams();
  const categoryId = params.id;
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Form'daki dosya listesini de alıyoruz
      const formData = new FormData();
      formData.append('name', values.name);
      if (fileList.length > 0) {
        formData.append('img', fileList[0].originFileObj);
      }

      const response = await fetch(`${apiUrl}/api/categories/${categoryId}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        message.success("Kategori başarıyla güncellendi.");
      } else {
        message.error("Kategori güncellenirken bir hata oluştu.");
      }
    } catch (error) {
      console.log("Kategori güncelleme hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSingleCategory = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${apiUrl}/api/categories/${categoryId}`);

        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }

        const data = await response.json();

        if (data) {
          form.setFieldsValue({
            name: data.name,
          });
          if (data.img) {
            setFileList([{ url: data.img }]); // Dosya listesine URL'yi ekleyin
          }
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleCategory();
  }, [apiUrl, categoryId, form]);

  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="Kategori İsmi"
          name="name"
          rules={[
            {
              required: true,
              message: "Lütfen kategori adını girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Kategori Görseli"
          name="img"
          valuePropName="fileList"
          getValueFromEvent={(e) => (e && e.fileList ? e.fileList : [])} 
          rules={[
            {
              required: true,
              message: "Lütfen kategori görselini yükleyin!",
            },
          ]}
        >
          <Upload
            name="img"
            listType="picture"
            maxCount={1}
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
            beforeUpload={() => false} // Dosya yüklemesini otomatik engeller
          >
            <Button icon={<UploadOutlined />}>Görsel Yükle</Button>
          </Upload>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Güncelle
        </Button>
      </Form>
    </Spin>
  );
};

export default UpdateCategoryPage;
