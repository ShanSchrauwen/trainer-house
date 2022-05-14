import sunflower from './../imgs/sunflower.png'


export const Home = () => {

    return (
        <div className="home__wrapper">
            <h1 className="home__header">
                Welcome to Beautiful Sunflower Athletic House
            </h1>
            <div className="home__content">
                Click the links above to see our customers and trainings available
            </div>
            <div>
                <img src={sunflower} alt="logo" className='logo__large' />
            </div>
        </div>
    )
}