import styles from './button.module.scss';
import React from 'react';

//не получается через функцию
/*function Button() {
    
    const {name, ...props} = props;

    return (
        <button {...props}>
            {name}
        </button>
    );
}

export default Button;*/



//через спред и классы
export default class Button extends React.Component {

//это для дефортных пропсов:
    static defaultProps = {
        name: "Hello!"
    }
    

    render() {


        // по дефолту:
        const name = this.props.name;
        const {...props} = this.props;
        return (
            <button {...props}>
                {name}
            </button>
        );
    }
}


        /*можно установить значения по дефолту:
        const name = this.props.name || "Hello!";
        const{...props} = this.props;
        но этот вариант не всегда оптимален по производительности*/


        
        /*const {name, ...props} = this.props;
        return (
            <button {...props}>
                {name}
            </button>
        );
    }
}*/




/*function Button (props) {
    
    const {name, title, className, id} = props;

    return (
        <button id={id} className={className} title={title}>
            {name}
        </button>
    );
}

export default Button;*/