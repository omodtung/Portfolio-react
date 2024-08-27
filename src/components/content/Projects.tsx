import { useState } from "react";
import { Button, Modal } from "antd";
import Item from "antd/es/list/Item";
import { SiNestjs } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { jsx } from "react/jsx-runtime";
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { VscBlank } from "react-icons/vsc";
import { FaCss3 } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
// import { RiNextjsFill } from "react-icons/ri";
// import { RiNextjsLine } from "react-icons/ri";
// ri/RiNextjsLine
interface IProject {
  // image: JSX.Element;
  image: JSX.Element[];
  title: string;

  shortDescription: string;
  detail: {
    description: string;
    Frontend: string;
    Backend: string;
    database: string;
    member: number;
    role: string;
    demo: string; //link video Or github or Deploy
    github: string;
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
      title: " Backend Job Recruitment ",
      shortDescription:
        " backend written in NestJs framework  ,connect to mongodb database and  MongoDB, TypeScript, JWT ,Docker   ",
      detail: {
        description:
          "The project copies current recruitment sites such as IT Viec, TopDev...",
        Frontend: "using React on the frontend",
        Backend: "NestJs framework And TypeScript",
        database: "mongodb",
        member: 1,
        role: "Backend Dev",
        github: "https://github.com/omodtung/job-recruitment.git", //link video Or github or Deploy
      },
    },


    {
      image: <SiNestjs size={50} color={"#ff1100"} />,
      title: " Backend Blogs ",
      shortDescription:
        " backend written in  NestJs framework , TypeScript , Mysql ,Docker ,TypeORM",
      detail: {
        description:
          "backend handles communication with DashBoard admin interface in managing posts and users and Client Site reading posts",

        Backend: "NestJs framework And TypeScript",
        database: "MysqL",
        member: 1,
        role: "Backend Dev",
        github: "https://github.com/omodtung/nestjs_BE_Blogs.git", //link video Or github or Deploy
      },
    },








    {
      image: <FaLaravel size={50} color={"#ff1100"} />,
      title: " Furniture shop ",
      shortDescription:
        "FurnitureShop - Ecommerce using Laravel MVC, Blade Templates, Boostrap, JQuery, Tabler, MySQL and integrate VNPay Payment, OAuth with Google & Facebook.",
      detail: {
        description:
          "FurnitureShop - Ecommerce using Laravel MVC, Blade Templates, Boostrap, JQuery, Tabler, MySQL and integrate VNPay Payment, OAuth with Google & Facebook.",
        Frontend: "Blade Templates ",
        Backend: "Laravel",
        database: "Mysql",
        member: 4,
        role: "Backend Dev",
        github: "https://github.com/omodtung/furniture-shop", //link video Or github or Deploy
      },
    },
    {
      image: [
        <FaBootstrap size={50} color={"#b51fb5"} />,

        <VscBlank size={30} />,
        <FaPhp size={50} color={"#2b00ff"} />,
      ],
      title: "  Student Management Application ",
      shortDescription:
        " Student Management Application - Boostrap 5 , PHP ,MYSQL , XAMPP , AJAX, JQUERY",
      detail: {
        description:
          "Đồ Án Công Nghệ Phần Mềm - Boostrap 5 , PHP ,MYSQL , XAMPP , AJAX, JQUERY",
        Frontend: "Boostrap 5",
        Backend: "PHP",
        database: "MYSQL",
        member: 4,
        role: "PHP Dev,Boostrap Dev",
        github: "https://github.com/omodtung/Quan_Ly_Hoc_Sinh.git", //link video Or github or Deploy
      },
    },
 
    {
      image: <SiSpringboot size={50} color={"#40ff00"} />,
      title: " Member management",
      shortDescription:
        " Member management, Equipment, and Violation Handling using SpringBoot, Thymeleaf, MySQL",
      detail: {
        description:
          "Member management, Equipment, and Violation Handling using SpringBoot Backend, Thymeleaf is a modern server-side Java template engine, MySQL",

        Backend: "Spring Boot",
        Frontend :"Thymeleaf ,Bootstrap ",
        database: "MySQL",
        member: 9,
        role: "Backend Dev ,Frontend Dev",
        github: "https://github.com/omodtung/Platform_SpringCore.git", //link video Or github or Deploy
      },
    },
   
    {
      image: <FaReact size={50} color={"#7BEDFA"} />,
      title: "Admin Blog Site",
      shortDescription:
        " Admin Blog Site Connect with Backend Blogs ,React Hook , Ckeditor, Axios, moment ,Hook Form ,Redux, Toastify , Bootstrap",
      detail: {
        description: "Interface page helps admin manage posts and users",
        Frontend: "React",

        member: 1,
        role: "Frontend Dev",
        demo: "", //link video Or github or Deploy
        github: "https://github.com/omodtung/admin_site_blog_fe.git",
      },
    },

   
    {
      image: [
        <FaReact size={50} color={"#7BEDFA"} />,
        // <FaCss3 size={50} color={"#ff1100"} />,
      ],
      title: "Porfolio Site",
      shortDescription:
        " Personal project introduction page  ",
      detail: {
        description: "Porfolio Site With React",
        Frontend: "React",
        member: 1,
        role: "Frontend Dev",
        demo: "", //link video Or github or Deploy
        github: "https://github.com/omodtung/Portfolio-react.git",
      },
    },
    {
      image: [
        <FaJava size={50} color={"#c9c938"} />,
        // <FaCss3 size={50} color={"#ff1100"} />,
      ],
      title: "Desktop App-Member Management-Desktop App",
      shortDescription:
        " Member management, Equipment, and Violation Handling ,Static ",
      detail: {
        description: "  MEMBER MANAGEMENT - DESKTOP APP using MySql , JavaSwing ,JDBC ,Xampp",
       database :"Mysql",
        member: 9,
        role: "Java Dev",
        demo: "", //link video Or github or Deploy
        github: "https://github.com/omodtung/MHPL.git",
      },
    },
    {
      image: <SiHibernate size={50} color={"#40ff00"} />,
      title: " MEMBER MANAGEMENT - DESKTOP APP ",
      shortDescription:
        " Member management, Equipment, and Violation Handling ,Static",
      detail: {
        description:
          " MEMBER MANAGEMENT - DESKTOP APP using Hibernate , MySql , JavaSwing ,JDBC ,Xampp",

        
        database: "MysqL",
        member: 9,
        role: "Java Dev",
        github: "https://github.com/omodtung/MHPL_QLTV.git", //link video Or github or Deploy
      },
    },
    {
      image: [<FaReact size={50} color={"#7BEDFA"} />],
      title: "Client blog Site",
      shortDescription:
        " Client blog Site NextJs ,Boostrap ,moment",
      detail: {
        description: "Client blog Site Just Read Post ",
        Frontend: "Next.js",
        member: 1,
        role: "Frontend Dev",
        demo: "", //link video Or github or Deploy
        github: "https://github.com/omodtung/Client_site_Blog.git",
      },
    },
    

    {
      image: [
        <FaHtml5 size={50} color={"#ff1100"} />,
        <FaCss3 size={50} color={"#2225d6"} />,
        <FaJs size={50} color={"#d1d43b"} />,
        <FaBootstrap size={50} color={"#b51fb5"} />,
      ],

      title: "BLog Study Abroad Information",
      shortDescription:
        " Study Abroad Information Using HTML , CSS ,JS ,Bootstrap ",
      detail: {
        description: "Study Abroad Information Using HTML , CSS ,JS ,Bootstrap",
        Frontend: "HTML , CSS ,JS ,Bootstrap",
        member: 4,
        role: "Frontend Dev",
        demo: "", //link video Or github or Deploy
        github: "https://github.com/omodtung/Blog_Thong_Tin_Du_Hoc.git",
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
          dataDetail && dataDetail.title ? `Project : ${dataDetail.title}` : ""
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
      >
        {dataDetail && (
          <ul>
            <li>Miêu Tả :{dataDetail.detail.description}</li>
            {dataDetail.detail.Frontend && (
              <li> Frontend :{dataDetail.detail.Frontend}</li>
            )}

            {dataDetail.detail.Backend && (
              <li>Backend: {dataDetail.detail.Backend}</li>
            )}
            {dataDetail.detail.database && (
              <li>Database :{dataDetail.detail.database}</li>
            )}
            <li>Số Lượng :{dataDetail.detail.member}</li>
            <li>Vai Trò: {dataDetail.detail.role}</li>

            {dataDetail.detail.demo && (
              <li>
                Demo:
                <a href=""> Link</a>
              </li>
            )}
            <li>
              {" "}
              Github:
              <a href={dataDetail.detail.github}> Link</a>
            </li>
          </ul>
        )}
      </Modal>

      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Projects</h3>
              <span>Meet  Projects</span>
            </div>
            <div className="list_wrap" style={{    flex: '1',padding: '10px', display: 'flex'
 }} >
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
