import classNames from 'classnames/bind';
import styles from './ModalFilter.module.scss';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const cx = classNames.bind(styles);
function ModalFilter({
    setDisplay,

    inputFilter,
    setInputFilter,
}) {
    const colectData = (event) => {
        setInputFilter((prev) => {
            return { ...prev, [event.target.name]: event.target.value };
        });
    };
    const collectNum = (event) => {
        if (!isNaN(event.target.value)) {
            colectData(event);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplay(false);
        setInputFilter({ ...inputFilter, searchFlag: true });
    };

    const handleCancel = (event) => {
        event.preventDefault();

        setDisplay(false);
        setInputFilter({ ...inputFilter, searchFlag: false });

        setInputFilter({});
    };

    return (
        <div
            className={cx('background')}
            onClick={(e) => {
                if (e.target.className === cx('background')) {
                    setDisplay(false);
                }
            }}
        >
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <h3>Filters</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TextField
                                id="outlined-basic"
                                label="ID Giảng Viên"
                                variant="standard"
                                autoComplete="off"
                                fullWidth
                                name="lecturerId"
                                onChange={colectData}
                                value={inputFilter.lecturerId}
                                // disabled={inputFilter.searchFlag}
                            />
                        </div>

                        <div className="col">
                            <FormControl fullWidth variant="standard">
                                <InputLabel id="demo-simple-select-label">
                                    Trình độ yêu cầu
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Trình độ yêu cầu"
                                    name="requiredLevel"
                                    // onChange={handleChange}
                                    value={`${inputFilter.requiredLevel}`}
                                    onChange={colectData}
                                    // disabled={inputFilter.searchFlag}
                                >
                                    <MenuItem value={'Beginer'}>
                                        Beginer
                                    </MenuItem>
                                    <MenuItem value={'Intermediate'}>
                                        Intermediate
                                    </MenuItem>
                                    <MenuItem value={'Expert'}>Expert</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-9 range-input">
                            <label style={{ paddingRight: '10px' }}>
                                Khoảng giá:{' '}
                            </label>
                            <input
                                value={inputFilter.priceS}
                                name="priceS"
                                placeholder="Từ $"
                                onChange={collectNum}
                                autoComplete="off"
                                // disabled={inputFilter.searchFlag}
                            ></input>
                            <i
                                class="fa-solid fa-minus"
                                style={{ padding: '0px 10px' }}
                            ></i>
                            <input
                                value={inputFilter.priceE}
                                name="priceE"
                                placeholder="Đến $"
                                onChange={collectNum}
                                autoComplete="off"

                                // disabled={inputFilter.searchFlag}
                            ></input>
                        </div>
                        <div className="col-3">
                            <FormControl fullWidth variant="standard">
                                <InputLabel id="demo-simple-select-label">
                                    Giá
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Giá tiền"
                                    name="sortBy"
                                    onChange={colectData}
                                    value={`${inputFilter.sortBy}`}
                                    // disabled={inputFilter.searchFlag}

                                    // onChange={handleChange}
                                >
                                    <MenuItem value={'ASC'}>
                                        Giá: thấp đến cao
                                    </MenuItem>
                                    <MenuItem value={'DESC'}>
                                        Giá: cao đến thấp
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-6">
                            <TextField
                                id="outlined-basic"
                                label="Chủ Đề"
                                variant="standard"
                                autoComplete="off"
                                fullWidth
                                name="topic"
                                onChange={colectData}
                                value={inputFilter.topic}
                                // disabled={inputFilter.searchFlag}
                            />
                        </div>
                    </div>
                    <div className={cx('action-btn')}>
                        <button
                            type="submit"
                            onClick={handleCancel}
                            style={{ color: 'red' }}
                        >
                            Bỏ Lọc
                        </button>

                        <button type="submit" onClick={handleSubmit}>
                            Áp Dụng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalFilter;
