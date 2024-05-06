import classNames from 'classnames/bind';
import styles from './ModalForm.module.scss';
import { useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import Fade from '@mui/material/Fade';
import SelectCourse from '../SelectCourse';
import { get_courses, post_order } from '~/services/API_DBS';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { randomIdOrder } from '~/functions';

const cx = classNames.bind(styles);

const method = [
    'Thanh toán bằng thẻ',
    'Thanh toán bằng séc trực tuyến',
    'Thanh toán bằng ví điện tử',
    'Thanh toán qua điện thoại di động',
    'Thanh toán qua chuyển khoản ngân hàng',
    'Thanh toán qua cổng thanh toán điện tử',
];
function ModalForm({ studentId, setDisplayModal, courseLearning }) {
    const [displayError, setDisplayError] = useState(false);
    const [msgError, setMsgError] = useState('');
    const [dataCourse, setDataCourse] = useState([]);
    const [inputForm, setInputForm] = useState({
        orderCode: randomIdOrder(),
        courseId: [],
        payMethod: '',
        studentId: studentId,
    });
    const closeModal = () => {
        setDisplayModal(false);
    };

    const isValid = () => {
        if (Object.values(inputForm).includes('')) {
            setMsgError('Vui lòng không để trống thông tin');
            setDisplayError(true);
            setTimeout(() => {
                setDisplayError(false);
            }, 3000);
            return false;
        }
        return true;
    };
    // const onChangeInput = (e) => {
    //   setInputForm({ ...inputForm, [e.target.name]: e.target.value });
    // };
    const handleSubmit = (event) => {
        // event.preventDefault();
        if (isValid()) {
            post_order(inputForm);

            closeModal();
            window.location.reload();
        }
    };

    useEffect(() => {
        get_courses({ searchFlag: false }).then((data) => {
            setDataCourse(data['data'] ?? []);
        });
    }, []);

    return (
        <div
            className={cx('background')}
            onClick={(e) => {
                if (e.target.className === cx('background')) {
                    closeModal();
                }
            }}
        >
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <h3>Thông Tin Đơn Hàng</h3>
                    <Fade in={displayError}>
                        <Alert variant="outlined" severity="error">
                            {msgError}
                        </Alert>
                    </Fade>
                </div>
                <form className={cx('form-data')}>
                    <div>
                        <img alt="not found" src="/order.png"></img>
                    </div>
                    <div className="container">
                        <div className="row align-items-end row-cols-1 row-cols-lg-2">
                            <div className="col">
                                <SelectCourse
                                    inputForm={inputForm}
                                    setInputForm={setInputForm}
                                    dataCourse={dataCourse}
                                    courseLearning={courseLearning}
                                />
                            </div>
                            <div className="col">
                                <FormControl fullWidth variant="standard">
                                    <InputLabel id="demo-simple-select-label">
                                        Phương Thức Thanh Toán
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={`${inputForm.payMethod}`}
                                        // value={"Other"}
                                        label="Phương Thức Thanh Toán"
                                        onChange={(e) =>
                                            setInputForm({
                                                ...inputForm,
                                                payMethod: e.target.value,
                                            })
                                        }
                                    >
                                        {/* <MenuItem value={"Beginner"}>Beginner</MenuItem>
                    <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                    <MenuItem value={"Expert"}>Expert</MenuItem> */}
                                        {method.map((met) => {
                                            return (
                                                <MenuItem value={met}>
                                                    {met}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={cx('action-btn')}>
                    <button onClick={handleSubmit} type="submit">
                        Lưu
                    </button>
                    <button onClick={closeModal}>Hủy</button>
                </div>
            </div>
        </div>
    );
}

export default ModalForm;
