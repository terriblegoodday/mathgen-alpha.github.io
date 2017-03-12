import React from 'react'
import { Link } from 'react-router'
import TasksAreaContainer from './tasksareacontainer'

const AboutPageContent = (<div>
        <h2 style={
            {
                color: '#00BCD4'
            }
        }>А что мне собственно делать на этом сайте?</h2>
        <p>Нажмите на вкладку <Link to='tasks'>"Задания"</Link>, затем выберите типы заданий, с которыми хотите поработать, нажмите на кнопку "составить тест".</p>
        <h2>Обновления</h2>
            <p><span className='timestamp'>12.03.17</span> Теперь можно печатать тесты (кнопка "распечатать тест").</p>
            <p><span className='timestamp'>19.02.17</span> Добавлен генератор логарифмических выражений.</p>
        <h2>Зачем было написано это приложение?</h2>
        <p>Это веб-приложение было написано для Южно-Сахалинской НПК 2016 года. Представляет собой генератор многовариатных тестовых заданий по математике. На данный момент на сайте представлены три генератора заданий:
        <ul>
            <li>Генератор квадратных уравнений</li>
            <li>Генератор линейных неравенств</li>
            <li>Генератор логарифмических выражений (обновлено 19.02.17)</li>
        </ul>
        Работа над сайтом ведется и по сей день, поэтому некоторые функции все еще могут не работать или работать нестабильно.
        </p>
        <h2>Я нажал x, веб-сайт не среагировал на команду.</h2>
        <p>Это происходит из-за того, что сервер сайта работает на бесплатном инстансе <a href='http://heroku.com'>Heroku</a>. Попробуйте осуществить операцию еще раз через 5-10 секунд.
        Это примерное время, за которое сервер "просыпается"</p>
        <h2>Какие технологии были использованы при разработке этого веб-приложения?</h2>
        <ul>
            <li>Сервер: Django</li>
            <li>Клиент: React + Redux</li>
        </ul>
        <h2>Есть ли будущее у этого проекта?</h2>
        <p>Есть перспективы вырасти в полноценную платформу для онлайн-тестирования с рейтингом пользователей, обучением по определенным системой “слабым” темам. То, что вы видите сейчас – это лишь основание того, что будет в будущем.</p>
        </div>)

class About extends React.Component {
    render() {
        return (
            <div>
                {AboutPageContent}
            </div>
        )
    }
}

export default About
