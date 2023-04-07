import loadingStyles from "../styles/Loading.module.css";

export default function Loading() {
 console.log("inside loading component ... ");

 return <div className={loadingStyles.spinner}></div>;
}
