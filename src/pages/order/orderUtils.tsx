import React from "react";
import {Descriptions, Icon, Input} from "antd";
import {getDatabaseNO, handleOrderNoChange} from "../../store/actionCreation";
import {connect} from "react-redux";

const InputGroup = Input.Group;

function orderUtils(props: any) {
    return (
        <div style={{padding: 24, background: '#fff', minHeight: 500}}>
            <div style={{marginBottom: 16}}>
                <InputGroup compact>
                    <Input addonBefore="SNO" maxLength={20} style={{width: '80%'}}
                           placeholder="订单号SNO,无需SNO前缀"
                           value={props.no}
                           onChange={props.onTransOrderInputChange}
                           addonAfter={<Icon type="code" theme="twoTone"
                                             onClick={() => props.onTransOrderClick(props.no)}/>}
                           onPressEnter={(e:any) => props.onTransOrderClick(e.target.value)}/>
                </InputGroup>
                <Descriptions title={props.dataBaseNo}/>
            </div>
        </div>
    );
}


// store => props
function mapStoreToProps(store: any) {
    return {
        dataBaseNo: store.orderUtil.dataBaseNo,
        no: store.orderUtil.no,
    }
}


// store.dispatch => props  可以直接通过props调用
function mapDispatchToProps(dispatch: any) {

    return {
        onTransOrderClick(value: string) {
            dispatch(getDatabaseNO(value))
        },
        onTransOrderInputChange(event: any) {
            dispatch(handleOrderNoChange(event.target.value))
        }
    }
}

// TodoList(provider里面) 和store 连接  这样返回一个容器组件
export default connect(mapStoreToProps, mapDispatchToProps)(orderUtils);
