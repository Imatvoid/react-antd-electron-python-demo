import rpcClient from "../rpc/rpcClient";


export const AC_CALC = "AC_CALC";

export function getCalcAction(formula: any) {
    return (dispatch: any) => {
        rpcClient.invoke("calc", formula, (error: any, res: any) => {
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


// 处理订单号变化
export const AC_HANDLE_ORDER_NO_CHANGE = "AC_HANDLE_ORDER_NO_CHANGE";
export function handleOrderNoChange(no: string) {
    return (dispatch: any) => {
        let action = {
            type: AC_HANDLE_ORDER_NO_CHANGE,
            data: no
        };
        dispatch(action);

    };
}


// 转化订单号为数据库号.
export const AC_TRANS_ORDER_NO = "AC_TRANS_ORDER_NO";
export function getDatabaseNO(no: string) {
    return (dispatch: any) => {
        rpcClient.invoke("transform_order_no", no, (error: any, res: any) => {
            if (error) {
                console.error(error);
            } else {
                let action = {
                    type: AC_TRANS_ORDER_NO,
                    data: res
                };
                dispatch(action);
            }
        });
    };
}
