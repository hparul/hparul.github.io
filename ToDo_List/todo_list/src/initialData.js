import React, { useEffect, useCallback } from "react";

const DataFetching = (props) => {

    const apiUrl = 'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw';

    const AddInitialData = useCallback(() => {
        //let setIsLoading=true
        fetch(apiUrl)
            .then(res => res.json())
            .then(result => {
                console.log(result);

                result.map((shift) => {
                    console.log(shift);
                   
                       props.setShifts((prev) =>
                        prev.concat({
                            description: shift.description,
                            deadline: shift.deadline,
                            completed: false,
                            id: shift.id,
                            editMode: false
                        
                        })
                    );
                });
            })

    }, [])


    useEffect(() => {
        AddInitialData()
    }, [AddInitialData])


    return (
        <>
            
        </>
    ) 
}
export default DataFetching;