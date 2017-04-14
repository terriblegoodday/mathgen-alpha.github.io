import React from 'react'
import Highlight from  'react-highlight'
import { Link } from 'react-router'
import TasksAreaContainer from './tasksareacontainer'

const AboutPageContent = (<div className="about_page">
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
        <p>Это веб-приложение было написано для Южно-Сахалинской НПК 2016 года. Представляет собой генератор многовариатных тестовых заданий по математике. На данный момент на сайте представлены три генератора заданий:</p>
        <ul>
            <li>Генератор квадратных уравнений</li>
            <li>Генератор линейных неравенств</li>
            <li>Генератор логарифмических выражений (обновлено 19.02.17)</li>
        </ul>
        <p>
        Работа над сайтом ведется и по сей день, поэтому некоторые функции все еще могут не работать или работать нестабильно.
        </p>
        <h2>Я нажал x, веб-сайт не среагировал на команду.</h2>
        <p>Это происходит из-за того, что сервер сайта работает на бесплатном инстансе <a href='http://heroku.com'>Heroku</a>. Попробуйте осуществить операцию еще раз через 5-10 секунд.
        Это примерное время, за которое сервер "просыпается"</p>
        <h2>Как написать свои генераторы для этого проекта (расширить этот проект)?</h2>
        <p>Вы можете использовать <a href='https://github.com/terriblegoodday/classroom-alpha-backend'>код серверной части</a>
        и <a href='https://github.com/terriblegoodday/classroom-alpha'>клиентской части</a> 
         как хотите, в том числе запускать форки моего проекта (только в 
            некоммерческих целях), но
             если вы хотите добавить генератор именно к этом сайту, то шаги для написания собственного генератора
             заданий таковы:
        </p>
        <ul>
            <li>Пишете генератор на Python 3.5.1. Вы можете использовать в своем генераторе <a href="http://www.sympy.org/en/index.html">SymPy</a>.</li>
            <li>Обязательно придерживаетесь формата объекта, представленного ниже.</li>
            <li>Отправляете файл генератора мне на электронную почту (<a href="mailto:terriblegoodday@icloud.com">terriblegoodday@icloud.com</a>).</li>
            <li>Ожидаете, когда генератор появится на этом сайте.</li>
        </ul>
        <Highlight className='python'>
            {
`from random import choice as random
from json import dumps as prepared
title = "Квадратные уравнения" # Обязательное поле
description = "Генерация приведенных квадратных уравнений и представление их в виде теста." # Обязательное поле

def generate(s): # У генератора могут быть настройки, которые хранятся в его \`dict\` в настройках 
                # сервера и при запросе генерации задания передаются генератору в качестве
                # аргумента функции. Если вашему генератору не нужны настройки, то напишите
                # аргумент по умолчанию None, иначе генератор вылетит в ошибкой  

    start_range = s['RANGE_OF_GENERATION'][0] # Берем настройки диапазона корней из аргумента \`s\`
    end_range = s['RANGE_OF_GENERATION'][1]
    x1 = 0
    x2 = 0
    while x1 == 0 or x2 == 0:
        x1 = random(range(start_range, end_range)) # Поправка: здесь лучше использовать randint
        x2 = random(range(start_range, end_range)) # Хотя можно и не увлекаться оптимизацией,
                                                # поскольку заданий генерируется не так много,
                                                # чтобы вызвать замедление сервера.
    p = -(x1 + x2)
    if p == 1: p = "+x"
    elif p == -1: p = "-x"
    elif p > 0: p = str("+" + str(p) + "x")
    elif p == 0: p = ""
    else: p = str(p) + "x"
    q = x1*x2
    if q > 0: q = "+"+str(q)

    return prepared({ # Объект, который передается в БД сервера и клиенту
        "task": "$x^2"+str(p)+str(q)+"=0$", # Для форматирования заданий используется LaTeX
        "answers": {
            "first_thread": {
                "placeholder": "Первый корень", # Объясняем смысл поля тестируемому
                "answer": list(map(str, [x1, x2])) # Возможные ответы на поставленный вопрос (может быть несколько)
            },
            "second_thread": {
                "placeholder": "Второй корень",    # Т. к. у генерируемого квадратного уравнения два корня, в любое из двух
                "answer": list(map(str, [x1, x2])) # полей можно ввести любой из двух корней.
            }
        },
    })`
            }
        </Highlight>
        <h2>Какие технологии были использованы при разработке этого веб-приложения?</h2>
        <ul>
            <li>Сервер: Django</li>
            <li>Клиент: React + Redux</li>
        </ul>
        <h2>Есть ли будущее у этого проекта?</h2>
        <p>Есть перспективы вырасти в полноценную платформу для онлайн-тестирования с рейтингом пользователей, обучением по определенным системой “слабым” темам. То, что вы видите сейчас – это лишь основание того, что будет в будущем.</p>
        <div className='copyright'>© <a href='//terriblegoodday.github.io'>@terriblegoodday</a> (Эдуард Джумагалиев) 2016-2017 | <span className='emoji'>💙</span><a href='//github.com/terriblegoodday/mathgen-alpha'>github.com</a></div>
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
