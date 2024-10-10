import { Button, Form, Input, Spin, Upload, message } from "antd";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

const CreateCategoryPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("img", values.img[0].originFileObj);

    try {
      const response = await fetch(`${apiUrl}/api/categories`, {
        method: "POST",
       
        body: formData,
      });

      if (response.ok) {
        message.success("Kategori başarıyla oluşturuldu.");
        form.resetFields();
      } else {
        message.error("Kategori oluşturulurken bir hata oluştu.");
      }
    } catch (error) {
      console.log("Kategori oluşturma hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
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
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
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
            beforeUpload={() => false} // Dosya yüklemesini otomatik engeller
          >
            <Button icon={<UploadOutlined />}>Görsel Yükle</Button>
          </Upload>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Oluştur
        </Button>
      </Form>
    </Spin>
  );
};

export default CreateCategoryPage;
