import react, { useEffect, useState, useRef } from 'react'
import './Feedback.scss'
import axios from 'axios';
import $, { contains } from 'jquery' //probably remove contains


import Button from '../UI/Button/Button'
import SocialMedias from '../SocialMedias/SocialMedias'
import { BsFillCaretUpFill } from "react-icons/bs";
import Recaptcha from 'react-google-invisible-recaptcha';




let db, timeout, once = 0, currIndex = 0, last_checked = '';
const handleResize = () => {
    const unitHeight = $('#Feedback .unit')[0].clientHeight;
    $('#Feedback')[0].scrollTop = unitHeight * currIndex;
}

const Feedback = (props) => {

    // captcha shit state
    const captchaRef = useRef(null);
    const [resolved, setResolved] = useState(false)

    useEffect(() => {
        console.log('trigger ')
        if (resolved.length) { //if string
            console.log('SEND')
            axios.post('/api/recaptcha', {resolved, feedback})
                .then( res => {
                    // console.log(res)
                    if (res.data === true) {
                        console.log('Success!')
                        clearTimeout(timeout)
                        setState('success')                     
                        setTimeout(() => {
                            chFeedbackPage(2)
                            currIndex = 2
                        }, 600)
                    } else if (res.data === false) {
                        console.log('Failure!')
                        captchaRef.current.reset();
                        $('#submit').attr("disabled", false);
                        setState('Failure!')
                    } else {
                        console.error('Something unexpected went wrong!')
                    }
                })
                .catch(err => {
                    console.err(err)
                    setState('Failure!')
                })
        }
    }, [resolved]) 

    useEffect(() => {
        window.addEventListener( 'resize', handleResize) 
    }, [])

    //checbox field state
    const [I_learn_p_because, ch_I_learn_p_because] = useState({
        less_erros: false,
        more_efficient: false,
        read_understand_explain: false,
        best_practicies: false
    })
    useEffect(() => {
        //synchronize I_learn_p_because with the master state (feedback)
        chfeedback(state => {
            const copy = {...state}
            copy.I_learn_p_because = I_learn_p_because
            return copy
        })
    }, [I_learn_p_because])

    //master state
    const [feedback, chfeedback] = useState({
        helpful: undefined,
        feature: undefined,
        else: '',
        email: '',
        I_learn_p_because: I_learn_p_because,
        // email_perm: email_perm,
    })

    const [state, setState] = useState(null)

    // const [email_perm, ch_email_perm] = useState({
    //     never: false,
    //     important: true,
    //     new_code_expl: true,
    // })

    //feedback pages
    const [feedbackPage, chFeedbackPage] = useState(0) //possible values - [0, 1, 2]

    useEffect(() => {
        handleResize(feedbackPage)
    }, [feedbackPage])

    const ChangeChkHandler = (e) => {
        //I learn programming theory because..
        if ( ['less_erros', 'more_efficient', 'read_understand_explain', 'best_practicies'].includes(e.target.id) ) {
            
            ch_I_learn_p_because(state => {
                //This works by total luck. It doesn't do exactly what I wanted but people won't spot the bug and it works soo.. 
                const I_learn_p = {...state}
                I_learn_p[e.target.id] = !I_learn_p[e.target.id] 
                const checkedCount = Object.values(I_learn_p).filter(a => a).length
                if (checkedCount >= 3) {
                    const pairs = Object.entries(I_learn_p).filter(pair => pair[0] !== e.target.id && pair[0] !== last_checked && pair[1] )
                    I_learn_p[ pairs[pairs.length-1][0] ] = false  
                }
                last_checked = e.target.id
                return I_learn_p
            })

        }


    //sdfaisdjfodia[sj fposaidj fapsio fjasdio fsd fa]
        const firstPageFilledUp = () => {
            // console.log('next page')
            setTimeout(() => {
                chFeedbackPage(1)
                currIndex = 1
            }, 500)
        }

        if ( ['helpful-one', 'helpful-two', 'helpful-three', 'helpful-four'].includes(e.target.id) ) {  
            if (feedback.feature) firstPageFilledUp()
        } else if (['automatic-one', 'automatic-two', 'automatic-three', 'automatic-four'].includes(e.target.id)) {
            if (feedback.helpful) firstPageFilledUp()
        }

        switch(e.target.id) {
        //rate from 1-5
            case 'helpful-one':
            case 'helpful-two':
            case 'helpful-three':
            case 'helpful-four':
            case 'helpful-five':
                chfeedback((state) => {
                    const copy = {...state}
                    copy.helpful = e.target.value
                    return copy
                })
                break;
        //good/bad idea
            case 'automatic-one':
                chfeedback((state) => {
                    const copy = {...state}
                    copy.feature = 1
                    return copy
                })
                break;
            case 'automatic-two':
                chfeedback((state) => {
                    const copy = {...state}
                    copy.feature = 2
                    return copy
                })
                break;
            case 'automatic-three':
                chfeedback((state) => {
                    const copy = {...state}
                    copy.feature = 3
                    return copy
                })
                break;
            case 'automatic-four':
                chfeedback((state) => {
                    const copy = {...state}
                    copy.feature = 4
                    return copy
                })
                break;
    //new oijfwoiefj weiof jweoif jweoif jweoifj woeijf oweifj woeijf we
            case 'anythingelse':
                chfeedback((state) => {
                    const copy = {...state}
                    copy.else = e.target.value
                    return copy
                })
                break;
    //new blad jaoweifj woaif jpwoiefj awof; iljawf aiowf wjf0 weof jewi
            case 'email':
                chfeedback((state) => {
                    const copy = {...state}
                    copy.email = e.target.value
                    return copy
                })
                break;
        }
    }

    const resolvedHandler = (key) => {

        setResolved(key)

        console.log('timeout')
        timeout = setTimeout(() => {
            setState('failure')
            console.log('TIME OUT')
            $('#submit').attr("disabled", false);
        }, 10000)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        //captcha
        captchaRef.current.execute()
        $('#submit').attr("disabled", true)
        // return false;
    }

    const upHandler = () => {
        chFeedbackPage(0)
        currIndex = 0
        $('#Feedback .unit')[0].addEventListener('click', () => {
            chFeedbackPage(1)
            currIndex = 1
        })
    }

    return (<div ref={props.innerRef} className="Feedback" style={{'display': 'none'}}>
        <div id="scrollPill" style={{'display': (feedbackPage === 1) ? 'flex' : 'none'}} onClick={upHandler}>
            <BsFillCaretUpFill size="30px"/>
        </div>
        <form id="Feedback" onSubmit={submitHandler} method="post">
            <div className="unit">
                <div className="center">
                    <div className="field ">  
                        <h2>How would you rate the application format?</h2>
                        //make inline
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="helpful-one" name="helpful" value="1" required/>
                            <i className="form-radio-button"></i>
                            <span>1</span>
                        </label>
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="helpful-two" name="helpful" value="2" required/>
                            <i className="form-radio-button"></i>
                            <span>2</span>
                        </label>
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="helpful-three" name="helpful" value="3" required/>
                            <i className="form-radio-button"></i>
                            <span>3</span>
                        </label>
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="helpful-four" name="helpful" value="4" required/>
                            <i className="form-radio-button"></i>
                            <span>4</span>
                        </label>
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="helpful-five" name="helpful" value="5" required/>
                            <i className="form-radio-button"></i>
                            <span>5</span>
                        </label>
                    </div>
                    <div className="field">
                        <h2>{`What about having a feature that \nautomatically explains any code you enter?`}</h2>
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="automatic-one" name="automatic" value="bad idea" />
                            <i className="form-radio-button"></i>
                            <span>bad idea</span>
                        </label>
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="automatic-two" name="automatic" value="boring" />
                            <i className="form-radio-button"></i>
                            <span>boring</span>
                        </label>
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="automatic-three" name="automatic" value="good idea" />
                            <i className="form-radio-button"></i>
                            <span>good idea</span>
                        </label>
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="automatic-four" name="automatic" value="great idea!" />
                            <i className="form-radio-button"></i>
                            <span>great idea!</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="unit">
                <div className="center">
                    <div className="field">
                        <h2>I learn programming theory because..</h2>
                        <div id="I_learn_p_because">
                            <label className="form-checkbox-label">
                                <input 
                                    key="less_erros"
                                    className="form-checkbox-field" 
                                    type="checkbox" 
                                    id="less_erros"
                                    checked={I_learn_p_because.less_erros}
                                    // defaultChecked={email_perm.never}
                                    // disabled={email_perm.never[1]}
                                    onChange={ ChangeChkHandler }/>
                                <i className="form-checkbox-button"></i>
                                <span>I want to write code with less errors</span>
                            </label>
                            <label className="form-checkbox-label">
                                <input
                                    key="more_efficient"
                                    className="form-checkbox-field" 
                                    type="checkbox" 
                                    id="more_efficient"
                                    checked={I_learn_p_because.more_efficient} 
                                    // defaultChecked={email_perm.important}
                                    // disabled={email_perm.important[1]}
                                    onChange={ ChangeChkHandler }/>
                                <i className="form-checkbox-button"></i>
                                <span>I want to write more efficient code</span>
                            </label>
                            <label className="form-checkbox-label">
                                <input
                                    key="read_understand_explain"
                                    className="form-checkbox-field" 
                                    type="checkbox" 
                                    id="read_understand_explain" 
                                    checked={I_learn_p_because.read_understand_explain}
                                    // defaultChecked={email_perm.new_code_expl}
                                    // disabled={email_perm.new_code_expl[1]}
                                    onChange={ ChangeChkHandler }/>
                                <i className="form-checkbox-button"></i>
                                <span>I want to be able to read, understand and explain code</span>
                            </label>
                            <label className="form-checkbox-label">
                                <input
                                    key="best_practicies"
                                    className="form-checkbox-field" 
                                    type="checkbox" 
                                    id="best_practicies" 
                                    checked={I_learn_p_because.best_practicies}
                                    // defaultChecked={email_perm.new_code_expl}
                                    // disabled={email_perm.new_code_expl[1]}
                                    onChange={ ChangeChkHandler }/>
                                <i className="form-checkbox-button"></i>
                                <span>I want to write code that follows the best practicies</span>
                            </label>
                        </div>
                    </div>
                    <div className="field">
                        <h2>{`Does the current format of the application \nhelp you logically and practically \nunderstand the code?`}</h2>
                    </div>
                </div>
            </div>
            <div className="unit">
                <div className="center">
                    
                    <div className="field form-element form-textarea">
                        {/* <h2>Anything else you'd want to add?</h2>
                        <textarea /> */}
                        <textarea onChange={ChangeChkHandler} id="anythingelse" className="form-element-field" placeholder=" "></textarea>
                        <div className="form-element-bar"></div>
                        <label className="form-element-label" htmlFor="anythingelse">I'd highly appreciate your feedback!</label>
                    </div>

                    {/* <div className="field">
                        <h2>{`Your email address:`}</h2>
                        <input type="email" id="email" /><br />
                        <input type="radio" id="email-one" name="email" value="email-one" />
                        <label htmlFor="email-one">Never send me anything.</label><br />
                        <input type="radio" id="email-two" name="email" value="email-two" />
                        <label htmlFor="email-two">Send me only important messages!</label><br />
                        <input type="radio" id="email-three" name="email" value="email-three" />
                        <label htmlFor="email-three">{`Send me an email when new \ncode explanations are available!`}</label>
                    </div> */}
                    <div className="field form-element form-input" style={{margin: '5px'}}>
                        <input onChange={ChangeChkHandler} id="email" className="form-element-field" placeholder="JohnDoe@email.com" type="email" required/>
                        <div className="form-element-bar"></div>
                        <label className="form-element-label" htmlFor="email">Email for future updates (not required)</label>
                    </div>
                    {/* <div id="email_perm" style={{'display': 'none'}}>
                        <label className="form-checkbox-label">
                            <input 
                                key="never"
                                className="form-checkbox-field" 
                                type="checkbox" 
                                id="never"
                                checked={email_perm.never}
                                // defaultChecked={email_perm.never}
                                // disabled={email_perm.never[1]}
                                onChange={ ChangeChkHandler }/>
                            <i className="form-checkbox-button"></i>
                            <span>Never send me any emails!</span>
                        </label>
                        <label className="form-checkbox-label">
                            <input
                                key="important"
                                className="form-checkbox-field" 
                                type="checkbox" 
                                id="important"
                                checked={email_perm.important} 
                                // defaultChecked={email_perm.important}
                                // disabled={email_perm.important[1]}
                                onChange={ ChangeChkHandler }/>
                            <i className="form-checkbox-button"></i>
                            <span>Only important emails.</span>
                        </label>
                        <label className="form-checkbox-label">
                            <input
                                key="new_code_expl"
                                className="form-checkbox-field" 
                                type="checkbox" 
                                id="new_code_expl" 
                                checked={email_perm.new_code_expl}
                                // defaultChecked={email_perm.new_code_expl}
                                // disabled={email_perm.new_code_expl[1]}
                                onChange={ ChangeChkHandler }/>
                            <i className="form-checkbox-button"></i>
                            <span>When new code explanations are available.</span>
                        </label>
                    </div> */}

                    <div className="btnWrapper">
                        <Button className="light" onClick="javascript:this.form.submit();" id='submit'>submit</Button> 
                        <Recaptcha
                            style={{
                                // 'transform': 'scale(0.77)',
                                // '-webkit-transform': 'scale(0.77)',
                                // 'transform-origin': '0 0',
                                // '-webkit-transform-origin': '0 0',
                                // 'boxShadow': 'none'
                            }}
                            badge="bottomleft"
                            ref={ captchaRef } 
                            sitekey="6Lfw7rkaAAAAAHzKxgVc5KWFvABlI4jPnbi7Uioh"
                            onResolved={ resolvedHandler }
                            onExpired={ () => {console.error('EXPIRED'); setState('Failure!')}}
                            onError={err => {console.error(err); setState('Failure!')}}
                            onLoaded={() => {
                                // $('iframe').parent().css({ 'transform' : 'scale(0.77)', 'WebkitTransform' : 'scale(0.77)', 'boxShadow': 'none'});
                            }}
                        />
                        <div className="error" style={{'color': (state === 'success') ? '#D1E8E2' : (state === 'failure') && 'red', 'display': state ? 'flex' : 'none'}} >
                            {(state === 'success') ? 'Submission successful!' : 'An error has occured!'}
                        </div>
                    </div>
                </div>
            </div>
            <div className="unit">
                <div className="center" style={{'transform': 'scale(1.2)', 'background': 'none'}}>
                    <div className="field thanks">
                        {/* <p>{`Your feedback means a lot!\n Thank you.`}</p> */}
                        <p>{`Your feedback means a lot!\n Thank you.`}</p>
                    </div>
                    <SocialMedias className="field" />
                    <div className="field goHome">
                        <p><a href="/" target="_self">see more explained codes</a></p>
                    </div>
                </div>
            </div>
        </form> 
    </div>)
}

export default Feedback