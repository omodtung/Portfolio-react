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
        " backend written in NestJs framework , communicates information with user interface in recruitment page ,connect to mongodb database",
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
      image: <FaLaravel size={50} color={"#ff1100"} />,
      title: " Furniture shop ",
      shortDescription:
        " backend written in NestJs framework , communicates information with user interface in recruitment page ,connect to mongodb database",
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
      image: [
       <FaBootstrap  size={50} color={"#b51fb5"}/>,

       <VscBlank  size={30}/>,
       <FaPhp size={50} color={"#2b00ff"} />, 
    ],
      title: " Backend Job Recruitment ",
      shortDescription:
        " backend written in NestJs framework , communicates information with user interface in recruitment page ,connect to mongodb database",
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
        " backend written in NestJs framework , communicates information with user interface in Blog  Admin page and Client Page ,connect to mysql database",
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
      image: <SiSpringboot size={50} color={"#40ff00"} />,
      title: " Backend Blogs ",
      shortDescription:
        " backend written in NestJs framework , communicates information with user interface in Blog  Admin page and Client Page ,connect to mysql database",
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
      image: <SiHibernate size={50} color={"#40ff00"} />,
      title: " Backend Blogs ",
      shortDescription:
        " backend written in NestJs framework , communicates information with user interface in Blog  Admin page and Client Page ,connect to mysql database",
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
      image: <FaReact size={50} color={"#7BEDFA"} />,
      title: "Admin Blog Site",
      shortDescription:
        " Admin interface page for admin to add, delete, edit posts as well as manage users ",
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
      ],
      title: "Client blog Site",
      shortDescription:
        " front-end page that doesn't require a login for users to interact with posts ... ",
      detail: {
        description: "front-end page for users to interact with and read posts",
        Frontend: "Next.js",
        member: 1,
        role: "Frontend Dev",
        demo: "", //link video Or github or Deploy
        github: "https://github.com/omodtung/Client_site_Blog.git",
      },
    },
    {
      image: [
        <FaReact size={50} color={"#7BEDFA"} />,
        // <FaCss3 size={50} color={"#ff1100"} />,
      ],
      title: "Porfolio Site",
      shortDescription:
        " front-end page that doesn't require a login for users to interact with posts ... ",
      detail: {
        description: "front-end page for users to interact with and read posts",
        Frontend: "Next.js",
        member: 1,
        role: "Frontend Dev",
        demo: "", //link video Or github or Deploy
        github: "https://github.com/omodtung/Client_site_Blog.git",
      },
    },
    {
      image: [
        <FaJava  size={50} color={"#c9c938"}/>
        // <FaCss3 size={50} color={"#ff1100"} />,
      ],
      title: "Client blog Site",
      shortDescription:
        " front-end page that doesn't require a login for users to interact with posts ... ",
      detail: {
        description: "front-end page for users to interact with and read posts",
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
        <FaJs size={50} color = {"#d1d43b"}/>  ,
        <FaBootstrap   size={50} color={"#b51fb5"}/>
      ],

      title: "Client blog Site",
      shortDescription:
        " front-end page that doesn't require a login for users to interact with posts ... ",
      detail: {
        description: "front-end page for users to interact with and read posts",
        Frontend: "Next.js",
        member: 1,
        role: "Frontend Dev",
        demo: "", //link video Or github or Deploy
        github: "https://github.com/omodtung/Client_site_Blog.git",
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
