import React from 'react';


class Main extends React.Component {

    render() {
        return (
            <>    
                <FurryBeast />
                <FurryBeast />
            </>
        )
    }
}

class FurryBeast extends React.Component {
    render() {
        return <p>Furry Beast coming soon</p>
    }
}

export default Main;

