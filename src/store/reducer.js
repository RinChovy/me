let defaultState = {
    menuModel: '/home',//控制菜单显示选项
    defaultOpenKeys: 'sub1'//菜单父级控制
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case 'TYPE_MENU':
            return { menuModel: action.value2, defaultOpenKeys: action.value };
        default:
            return state;
    }
};