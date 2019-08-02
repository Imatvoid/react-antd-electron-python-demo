import rpcClient from "../rpc/rpcClient";


export const  AC_CALC = "AC_CALC";
export function getCalcAction(formula) {
    return dispatch => {
        rpcClient.invoke("calc", formula, (error, res) => {
            if (error) {
                console.error(error);
            } else {
                let action = {
                    type: AC_CALC,
                    result: res
                };
                dispatch(action);
            }
        });
    };
}
