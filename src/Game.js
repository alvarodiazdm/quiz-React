import React from 'react';

export default class Game extends React.Component{
    render(){
        return (
            <div>
                {console.log(this.props)}
                {this.props.question.question}: {}
                <input type="text" value={this.props.question.userAnswer || ''} onChange={ e =>{
                    this.props.onQuestionAnswer(e.target.value);
                }}/>
                <img src= {this.props.image} width="360" height="240" />
                {this.props.tips.map((tip) =>
                    <ul>
                        <li>
                            {tip}
                        </li>
                    </ul>
                )}
                <p>
                    <button id="siguiente" onClick={() =>{
                       this.props.onChangeQuestion(1);
                    }}>GAME: Siguiente</button>
                    <button id="anterior" onClick={()=>{ //REVISAR EL BOTON ANTERIOR EN EL INICIO DE LA APLICACION, TIENE QUE EMPEZAR DESACTIVADO
                        this.props.onChangeQuestion(-1);
                    }}>Anterior</button>
                    <button id = "submit" onClick={()=>{
                        this.props.submit();
                    }}>Submit</button>
                </p>
            </div>
        );
    }
}