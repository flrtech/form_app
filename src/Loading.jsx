import './home.css';

const Loading = () => {
    return (
        <div className="ui segment minh">
            <div className="ui active dimmer">
                <div className="ui text loader">Loading</div>
            </div>
            <p></p>
        </div>
    );
};

export default Loading;