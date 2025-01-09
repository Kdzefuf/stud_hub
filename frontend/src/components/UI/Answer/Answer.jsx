import React, {useEffect, useState} from "react";
import classes from './Answer.module.css'
import Rating from "../Rating/Rating";
import GetUserInfo from "../../../API/GetUserInfo";
import profile from '../../../images/profile.svg';
import images from "../Images/images";

function Answer(props) {
    const [nickname, setNickname] = useState(''); // Состояние для nickname
    const [avatar, setAvatar] = useState('');
    const [answerData, setAnswerData] = useState([]);
    const [date, setDate] = useState('');
    const [url, setUrl] = useState('');
    const [isUrl, setIsUrl] = useState(false);
    const [img, setImg] = useState(images.TXT);
    
    useEffect(() => {
        setAnswerData(props.answer);
        const fetchUserInfo = async () => {
        try {
            const data = await GetUserInfo.getUserInfo(props.answer.author_id); // Предполагаем, что userId передается как пропс
            
            if (data && data.nickname) {
            setNickname(data.nickname);
            setAvatar(data.photo !== '[null]' ? `http://localhost:3500/uploads/${data.photo}` : profile) // Записываем nickname в состояние
            }
        } catch (error) {
            console.error('Ошибка при получении данных пользователя:', error);
        }
        };

        
        fetchUserInfo();
        if (props.answer.file) {
            setIsUrl(true);
            setUrl(`http://localhost:3500/uploads/${props.answer.file}`);
            setImg(getFileIcon(props.answer.file))
        }   
        formatUnixToDate(props.answer.id)
    }, []);

    function formatUnixToDate(unixTime) {
        const dateObj = new Date(Number(unixTime));
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        setDate(`${day}.${month}.${year}`);
    }

    const getFileExtension = (filename) => {
        const ext = filename.split('.').pop().toUpperCase(); // Извлекаем расширение файла
        return ext;
    };

    const getFileIcon = (filename) => {
        const ext = getFileExtension(filename); // Получаем расширение
        return images[ext]; // Ищем иконку, если нет — используем иконку по умолчанию (например, TXT)
    };

    return (
        <li className={classes.answer}>
            <img src={avatar} alt="Профиль отзыв" className={classes.profile}/>
            <div className={classes.cont}>
                <h5 className={classes.title}>{nickname}, {date}</h5>
                <p className={classes.descr}>{answerData.description}</p>
            </div>
            {isUrl && (
                <a href={url} className={classes.link} download={props.answer.file}>
                    <img src={img} className={classes.fileImg}/>
                </a>
            )}
            
        </li>
    )
}

export default Answer;