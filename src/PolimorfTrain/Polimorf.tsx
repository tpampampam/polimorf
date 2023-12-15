import Button from './Button'
import style from './Polimorf.module.css'
import Text from './Text'


export default function Polimorf() {
    return(
        <div className={style.Polimorf}>
            <Text as='span'>Hello sendbox</Text>
            <Text>Start editing to see magic happen!</Text>
            <div>
                <Button primary as='a' href='/'>Click me</Button>
                <Button secondary>Click me</Button>
            </div>
        </div>
    )
}