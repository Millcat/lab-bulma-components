import React from "react";

const bulmaClasses = {
    isActive: 'is-active',
    isBlack: 'is-black',
    isCentered: 'is-centered',
    isDanger: 'is-danger',
    isDark: 'is-dark',
    isFocused: 'is-focused',
    isGrouped: 'is-grouped',
    isHovered: 'is-hovered',
    isInfo: 'is-info',
    isInverted: 'is-inverted',
    isLarge: 'is-large',
    isLight: 'is-light',
    isLink: 'is-link',
    isLoading: 'is-loading',
    isMedium: 'is-medium',
    isOutlined: 'is-outlined',
    isPrimary: 'is-primary',
    isRight: 'is-right',
    isRounded: 'is-rounded',
    isSelected: 'is-selected',
    isSmall: 'is-small',
    isStatic: 'is-static',
    isSuccess: 'is-success',
    isText: 'is-text',
    isWarning: 'is-warning',
    isWhite: 'is-white',
}

export const CoolButton = (props) => {

    // console.log(bulmaClasses["isSuccess"]);

    let fullCssClass = "";
    for (let key in props) {
        if (key !== "children") {
            if (key !== "className") {
                fullCssClass += bulmaClasses[key] + " ";
            } else {
                fullCssClass += " " + props[key];
            }
        }
    }

    return (
        <button className={"button " + fullCssClass}>
            {props.children}
        </button>
    )
}

export default CoolButton