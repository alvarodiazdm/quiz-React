import React from 'react';

export default class Game extends React.Component{
    render(){
        return (
            <div>
                {this.props.question.question}: {}
                <input type="text" value={this.props.question.userAnswer || ''} onChange={ e =>{
                    this.props.onQuestionAnswer(e.target.value);
                }}/>
                <img src= {this.props.image} width="360" height="240" />
                <p>
                    <button id="siguiente" onClick={() =>{
                       this.props.onChangeQuestion(1);
                    }}>GAME: Siguiente</button>
                    <button id="anterior" onClick={()=>{ //REVISAR EL BOTON ANTERIOR EN EL INICIO DE LA APLICACION, TIENE QUE EMPEZAR DESACTIVADO
                        this.props.onChangeQuestion(-1);
                    }}>Anterior</button>
                </p>
            </div>
        );
    }
}