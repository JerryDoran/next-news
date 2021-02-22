import styles from "../styles/EOM.module.css";
import Toolbar from "../components/Toolbar";

export const getStaticProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/JerryDoran/mock-data/employeeOfTheMonth"
  );

  const employee = await apiResponse.json();

  return {
    props: {
      employee: employee
    }
  };
};

const EOM = ({ employee }) => {
  console.log(employee);

  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the Month</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3 className={styles.name}>{employee.name}</h3>
          <h6 className={styles.title}>{employee.position}</h6>
          <img src={employee.image} alt={employee.name} />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EOM;
