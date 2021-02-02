import React from 'react';

const Header = () => {
    const styles = {
        img: {
            height: 145,
            width: 195,
            paddingLeft: 50

        },
        h1: {
            textAlign: "center"
        }
    }

    return (
        <div className="row">
          <a href="https://www.gatech.edu/" target="_blank"><img className="col s3" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092016/untitled-2_18.jpg?itok=SZJj7Hq5" alt="GA Tech Logo" style={styles.img}/></a><h1 className="col s9">GT Computer Science Staff Directory:</h1>  
        </div>
    );
};

export default Header;