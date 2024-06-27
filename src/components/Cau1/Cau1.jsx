import './Cau1.css'

function Nav(){
    return(
        <div>
            {/* <header className='Navbar'>
                <div className='button'>
                    <button><i class="fa-solid fa-house"></i></button>
                    <button>Gioi Thieu</button>
                    <button>Tin tuc & thong bao</button>
                    <button>Tuyen sinh</button>
                    <button>Dao Tao</button>
                    <button>Nghien cuu</button>
                    <button>Doi Ngoai</button>
                    <button>Van ban</button>
                    <button>Sinh Vien</button>
                    <button>Lien He</button>
                </div>
            </header> */}
            <nav className="navbar">
                <ul className="navbar-menu">
                    <button className="navbar-item"><i class="fa-solid fa-house"></i></button>
                    <li className="navbar-item"><a href="#">Giới thiệu</a></li>
                    <li className="navbar-item"><a href="#">Tin tức & Thông báo</a></li>
                    <li className="navbar-item"><a href="#">Tuyển sinh</a></li>
                    <li className="navbar-item"><a href="#">Đào tạo</a></li>
                    <li className="navbar-item"><a href="#">Nghiên cứu</a></li>
                    <li className="navbar-item"><a href="#">Đối ngoại</a></li>
                    <li className="navbar-item"><a href="#">Văn bản</a></li>
                    <li className="navbar-item"><a href="#">Sinh viên</a></li>
                    <li className="navbar-item"><a href="#">Liên hệ</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;