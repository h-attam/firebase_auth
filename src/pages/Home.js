import { Link } from "react-router-dom";


export default function Home() {
  return(
   <div>
    <Link to="/register">Kayıt Ol</Link>
    <Link to="/login">Giriş Yap</Link>
   </div>
  )
}