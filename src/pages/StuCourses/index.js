import classNames from 'classnames/bind';
import style from './Courses.module.scss';
import ButtonAdd from '~/Components/ButtonAdd';
import TextField from '@mui/material/TextField';
import { useScrollTrigger } from '@mui/material';
import { useEffect, useState, useTransition } from 'react';
import { useLocation } from 'react-router-dom';
import ModalFilter from './ModalFilter';
import { get_StuCourse, get_courses } from '~/services/API_DBS';
import RowData from './RowData';
import ModalForm from './ModalForm';

const cx = classNames.bind(style);

function StuCourses() {
    const [displayFormAdd, setDisplayFormAdd] = useState(false);
    const [display, setDisplay] = useState(false);
    const [search, setSearch] = useState('');
    const [inputFilter, setInputFilter] = useState({
        searchFlag: false,
        lecturerId: '',
        requiredLevel: '',
        priceS: '',
        priceE: '',
        sortBy: '',
        progressS: '',
        progressE: '',
    });
    const [dataCourse, setDataCourse] = useState([]);
    const location = useLocation();
    const studentId = location.state.studentId;
    // console.table(dataCourse);
    useEffect(() => {
        get_StuCourse(studentId, inputFilter).then((data) => {
            setDataCourse(data['data'] ?? []);
        });
    }, [display]);

    const filterData = dataCourse.filter((course) => {
        if (search == '') {
            return course;
        } else {
            return (
                course.courseId.toLowerCase().includes(search) ||
                course.courseName.toLowerCase().includes(search)
            );
        }
    });

    // console.log(dataCourse);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log(e.target.value);
        }
    };
    return (
        <div className="content">
            <div className="header-page">
                <h1>Danh Sách Khóa Học</h1>
                <ButtonAdd
                    text={'+ Thêm Đơn Hàng'}
                    onclick={() => setDisplayFormAdd((prev) => !prev)}
                />
            </div>
            <div className="search action-table">
                <div style={{ width: '25%' }}>
                    <TextField
                        id="outlined-basic"
                        label="Tìm Kiếm Tên Khóa Học hoặc Mã Khóa Học"
                        variant="outlined"
                        autoComplete="off"
                        fullWidth
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value.toLowerCase());
                        }}
                    />
                </div>
                <button onClick={() => setDisplay(true)}>
                    Filter
                    <i class="fa-solid fa-filter"></i>
                </button>
            </div>
            <table className="table-big">
                <thead>
                    <th>Mã Khóa Học</th>
                    <th>Tên Khóa Học</th>
                    <th>Giá Tiền</th>
                    <th>ID Giảng Viên</th>
                    <th>Trình Độ Yêu Cầu</th>
                    <th>Tiến Độ</th>
                    {/* <th>Thao Tác</th> */}
                </thead>
                <tbody>
                    {filterData.map((course, index) => {
                        let findCourse = course.studentCourses.find(
                            (item) =>
                                item.courseId === course.courseId &&
                                item.studentId === studentId,
                        );

                        return (
                            <RowData
                                course={course}
                                progress={findCourse.progress}
                            />
                        );
                    })}
                </tbody>
            </table>
            {display && (
                <ModalFilter
                    setDisplay={setDisplay}
                    inputFilter={inputFilter}
                    setInputFilter={setInputFilter}
                />
            )}
            {displayFormAdd && (
                <ModalForm
                    studentId={studentId}
                    setDisplayModal={setDisplayFormAdd}
                    courseLearning={dataCourse.map((course) => course.courseId)}
                />
            )}
        </div>
    );
}

export default StuCourses;
