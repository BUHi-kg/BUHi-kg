import './OurServices.css'
import ellipse214 from '../../images/Ellipse214.png'
import ellipse215 from '../../images/Ellipse215.png'
import line from '../../images/Line.png'


export default function OurServices(){
    return(
        <div id='services'>
            <div className='ourservices'>
                <img src={ellipse214}/> 
                <img src={ellipse215}/>
                <h1 className='ourname'>Наши услуги</h1>
            </div>
            <h2 className='ourmaintext'>Предоставляем <br />
                полный пакет <br />
                бухгалтерских услуг<br />
            </h2>
            <img className='ourimg' src={line} />
            <div className='ourtext'>
                <div className='textfirst'>
                    <p className='servicestext'>Консультация <br /> бухгалтера</p>
                    <p>Нулевая <br /> отчетность</p>
                </div>
                <div className='textsecond'>
                    <p className='servicestext'>Бухгалтерское<br />сопровождение </p>
                    <p>Оптимизация<br />
                        налогообложение
                    </p>
                </div>
                <div className='textser'>
                    <p className='servicestext1'>Востановление<br />
                        бухгалтерского учета
                    </p>
                    <p>Ведение кодрового <br />
                        учета
                    </p>
                    <p>
                    Ведение учета
                    </p>
                </div>
            </div>
        </div>

    )
}