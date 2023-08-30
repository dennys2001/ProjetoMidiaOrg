import React, { Fragment, useState, useEffect }  from "react";

const OrgComplete = () => {
    const [time, setTime] = useState([]);
        const getTime = async () => {
            try {

                const response = await fetch("http://localhost:5000/allemployees")
                const jsonData = await response.json()
                
                setTime(jsonData);
                
            } catch (err) {
                console.error(err.message)
                
            }
            
        };
        console.log(time);
        useState(() => {
            getTime();
        }, []);




        return (
        <Fragment>
                    <h1 className="text-center mt-5">Teste</h1>
                    <body>
                        {time.map(time => (
                            <tr key={time.id}>
                                <td>{time.id}</td>
                               <td>{time.nome}</td>
                               <td>{time.level}</td>
                               <td>{time.cargo}</td>
                               <td>{time.lider_id}</td>
                               <td>{time.id_sub_estrutura}</td>
                               
                       
                            </tr>
                        ))

                        }
                        </body>
        </Fragment>
        );
    }
export default OrgComplete;