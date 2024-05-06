import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('content')}>
            <h1>TRƯỜNG ĐẠI HỌC BÁCH KHOA</h1>
            <h1>KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH</h1>
            <h2>MÔN HỌC: HỆ CƠ SỞ DỮ LIỆU</h2>
            <img src="hcmut.png" alt="not found" />
            <h3>BÀI TẬP LỚN SỐ 2</h3>
            <div>Giảng viên hướng dẫn: Trần Thị Quế Nguyệt</div>
            <div>Nhóm: 5 Lớp: L01</div>
            {/* <table className={cx('list-student')}>
                <thead>
                    <th>Thành Viên</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Nguyễn Nhật Pháp</td>
                    </tr>
                    <tr>
                        {' '}
                        <td>Trần Duy Phương</td>
                    </tr>
                    <tr>
                        <td>Nguyễn Tiểu Anh</td>
                    </tr>
                    <tr>
                        {' '}
                        <td>Dương Hồ Hoàng Phúc</td>
                    </tr>
                    <tr>
                        <td>Nguyễn Đức Hiếu</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    );
}
export default Home;
