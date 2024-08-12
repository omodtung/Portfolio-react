import { useState } from "react";
import { Button, Modal } from "antd";
import Item from "antd/es/list/Item";
import { SiNestjs } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { jsx } from "react/jsx-runtime";
interface IProject {
  image: JSX.Element;
  title: string;

  shortDescription: string;
  detail: {
    description: string;
    Frontend: string;
    member: number;
    role: string;
    demo: string; //link video Or github or Deploy
  };
}
const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>(null);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };
  const DataProject: IProject[] = [
    {
      image: <SiNestjs size={50} color={"#ff1100"} />,
      title: "Nest Js Backend IT Viec",
      shortDescription:
        " Web design is a similar process of creation, with the intention of presenting the content on   electronic pages ... ",
      detail: {
        description: "Dự án NestJs Clone IT Viec",
        Frontend: "  Sử  Dụng React phía người dùng ",
        member: 2,
        role: "",
        demo: "", //link video Or github or Deploy
      },
    },

    {
      image: <FaReact size={50} color={"#7BEDFA"} />,
      title: "Photography",
      shortDescription:
        " Web design is a similar process of creation, with the intention of presenting the content on   electronic pages ... ",
      detail: {
        description: "",
        Frontend: "",
        member: 3,
        role: "",
        demo: "", //link video Or github or Deploy
      },
    },

    {
      image: <FaReact size={50} color={"#7BEDFA"} />,
      title: "Photography",
      shortDescription:
        " Web design is a similar process of creation, with the intention of presenting the content on   electronic pages ... ",
      detail: {
        description: "",
        Frontend: "",
        member: 4,
        role: "",
        demo: "", //link video Or github or Deploy
      },
    },
  ];
  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        title={
          dataDetail && dataDetail.title ? `Du An ${dataDetail.title}` : ""
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
      >
        { 
        
        
        dataDetail &&
        

        <ul>
          <li>Miêu Tả :{dataDetail.detail.description}</li>
          <li> Frontend :</li>
          <li>Backend :</li>
          <li>Số Lượng :</li>
          <li>Vai Trò: Backend Dev</li>
          <li>
            Demo:
            <a href=""> Link</a>
          </li>
          <li>
            {" "}
            Github:
            <a href=""> Link</a>
          </li>
        </ul>
}
      </Modal>

      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Services</h3>
              <span>Meet our amazing services</span>
            </div>
            <div className="list_wrap">
              <ul>
                {DataProject.map((item, index) => {
                  return (
                    <li>
                      <div
                        className="inner"
                        title="xem chi tiet"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setDataDetail(item);
                          setIsModalOpen(true);
                        }}
                      >
                        <div className="icon">{item.image}</div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>

                        <div
                          className="view_detail"
                          style={{ padding: "5px  0" }}
                        >
                          <span style={{ cursor: "pointer" }}>
                            <FaArrowRight />
                            &nbsp; Xem Chi Tiet
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
