import React from 'react';
import Tip from './Tip.js';
import Result from './Result.js';

let anterior = false;
let siguiente = false;

export default class Game extends React.Component{
    render(){
        if(this.props.currentQuestion === 0){
            anterior = true;
        }else if(this.props.currentQuestion === 9){
            siguiente = true;
        }else{
            anterior = false;
            siguiente = false;
        }
        return (
            <div>
                {console.log(this.props)}
                <h2>{this.props.question.question}: {}</h2>
                <input className="center3" type="text" value={this.props.question.userAnswer || ''} onChange={ e =>{
                    this.props.onQuestionAnswer(e.target.value);
                }}/>
                <img src= {this.props.image} width="360" height="240" />

                <h4>Tips:</h4>
                {this.props.tips.map((tip) =>
                    <Tip key={tip} tip = {tip}/>
                )}

                <div className = "center2">
                    <button id="anterior" disabled={anterior} onClick={()=>{ //REVISAR EL BOTON ANTERIOR EN EL INICIO DE LA APLICACION, TIENE QUE EMPEZAR DESACTIVADO
                        this.props.onChangeQuestion(-1);
                    }}>Anterior</button>
                    <button id="siguiente" disabled={siguiente} onClick={() =>{
                        this.props.onChangeQuestion(1);
                    }}>Siguiente</button>

                    <div>
                    </div>
                    <button id = "submit" onClick={()=>{
                        this.props.submit();
                    }}>Submit</button>
                </div>
            </div>
        );
    }
}