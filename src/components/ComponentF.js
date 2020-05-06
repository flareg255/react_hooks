import React, { useContext } from 'react'
import { UserContext, LanguageContext } from './WrapContextComp'


function ComponentF() {
    const user = useContext(UserContext);
    const language =useContext(LanguageContext);

    console.log(user);
    console.log(user.name);
    
    return (
        <div>
            <div>{user.name}: {language}</div>
            {/* <UserContext.Consumer>
                {
                    user => {
                        return (
                            <LanguageContext.Consumer>
                                {
                                    language => {
                                    return <div>{user.name}: {language}</div>
                                    }
                                }
                            </LanguageContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer> */}
        </div>
    )
}

export default ComponentF
