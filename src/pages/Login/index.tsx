import React from 'react';
import Header from '../../components/Header';
import Styles from './index.module.css';
import SocialLoginTypeItem from './SocialLoginTypeItem';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { goLogin } from '../../redux/userSlice'


const Login = () => {
    const history = useHistory();
    const dispatch = useAppDispatch()

    const loginHandle = () => {
        dispatch(goLogin(true))
        history.replace('/articles')
    }

    return (
        <>
            <Header />
            <div className="wrap-box main-content-container">
                <h1>
                    LINEでログイン
                </h1>
                <div className={Styles.loginTypes}>
                    <SocialLoginTypeItem />
                    <div className={Styles.gapline}></div>
                    <SocialLoginTypeItem />
                </div>
                <h1>
                    生徒・保護者ログイン（スクールポパー）
                </h1>
                <p>
                    生徒番号とパスワードを入力してログインしてください。生徒番号やパスワードがわからない場合は、教室にお問い合わせください。
                </p>

                <div>
                    <div className="form-group">
                        <label htmlFor="role">
                            <input type="radio" name="role" defaultChecked />
                            保護者
                        </label>
                        <label htmlFor="role">
                            <input type="radio" name="role" />
                            生徒
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="student-no" className="form-label">生徒番号</label>
                        <input type="text" name="student_no" id="student-no" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">パスワード</label>
                        <input type="text" name="password" id="password" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="show-password" className="form-label">
                            <input type="checkbox" id="show-password" />
                            パスワードを表示
                        </label>
                    </div>
                    <div className="form-group-btn">
                        <button onClick={loginHandle} className="btn" type="submit">ログインする</button>
                    </div>
                </div>

                <div>
                    <a href="/students/reset/password">パスワードを忘れた方はこちら</a>
                </div>

            </div>
        </>
    )
}

export default Login;