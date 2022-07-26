import react, { useEffect, useState, useRef } from 'react'
import './Feedback.scss'
import Button from '../UI/Button/Button'
import $, { contains } from 'jquery'
import CoeusIntro from '../CoeusIntro/CoeusIntro';
//form-radio form-radio-inline
import { BsFillCaretUpFill } from "react-icons/bs";
import SocialMedias from '../SocialMedias/SocialMedias'
// import firebase from "firebase/app";
// import "firebase/firestore"; //not sure if i need that.. 

import axios from 'axios';

//recaptcha
import Recaptcha from 'react-google-invisible-recaptcha';



//You're about to see the worst code I've written in the last 2 years ://// I feel embarrassed :/D


let db;

let timeout;

let once = 0

let currIndex = 0;

const handleResize = () => {
    const unitHeight = $('#Feedback .unit')[0].clientHeight;
    $('#Feedback')[0].scrollTop = unitHeight * currIndex;
}

const Feedback = (props) => {

    // console.log(props.show)
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

    const [state, setState] = useState(null)

    const [email_perm, ch_email_perm] = useState({
        never: false,
        important: true,
        new_code_expl: true,
    })

    const [feedback, chfeedback] = useState({
        helpful: undefined,
        feature: undefined,
        else: '',
        email: '',
        email_perm: email_perm,
    })

    useEffect(() => {
        if (!db) {
            // db = firebase.firestore()
            
            // db.settings({
            //     timestampsInSnapshots: true
            // });
        }
        // console.log('<---testing--->')
   
        //GETTING DATA //not working
        // db.collection('feedbacks').get().then((snapshot) => {
        //     // console.log(snapshot.docs)
        //     snapshot.docs.forEach(doc => {
        //         console.log(doc.data())
        //     })
        // }).catch(err => {
        //     throw err
        // })
                // //POSTING DATA
                // db.collection('feedbacks').doc('test111').set({success: true}).then(() => {
                //     console.log('operation successful')
                // }).catch(err => {
                //     console.log('err')
                // })


        // console.log('</---testing--->')

        //TODO: Find a way to replace this with css
        // const orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
        // if (orientation === 'portrait-primary') {
            // document.getElementById('Feedback').style.height = window.innerHeight - document.getElementById('Code').clientHeight + 'px'
        // }
        // document.getElementById('Feedback').style.maxHeight = //document.getElementById('Feedback').parentNode.parentNode.clientHeight - 10 + 'px';
        // document.getElementById('Window').style.height = document.getElementById('Expl').clientHeight + 'px';
        
        window.addEventListener( 'resize', handleResize) 
    }, [])

    const [feedbackPage, chFeedbackPage] = useState(0) //possible values - [0, 1, 2]

    useEffect(() => {
        chfeedback(state => {
            const copy = {...state}
            copy.email_perm = email_perm
            return copy;
        })
    }, [email_perm])

    useEffect(() => {
        // const unitHeight = $('#Feedback .unit')[0].clientHeight;
        // $('#Feedback')[0].scrollTop = unitHeight * feedbackPage  //scroll(unitHeight * feedbackPage)
        // console.log(unitHeight)
        handleResize(feedbackPage)
        
    }, [feedbackPage])

    const ChangeChkHandler = (e) => {
        //I hope nobody looks at this code. I didn't have time to make it shorter and now it all stays hardcoded as if
        //it's my first time coidng in js :) Anyway, I gotta fight perfectionism!!!
        // console.log(e.target.id)
        if (e.target.id === 'never') {
            ch_email_perm(state => {
                const copy = {...state}
                copy.important = state.never
                copy.new_code_expl = state.never
                copy.never = !state.never
                return copy;
            })
        } else if (e.target.id === 'important') {
            ch_email_perm(state => {
                const copy = {...state}
                copy.important = !state.important
                copy.never = false
                return copy;
            })
        } else if (e.target.id === 'new_code_expl') {

            ch_email_perm(state => {
                const copy = {...state}
                copy.new_code_expl = !state.new_code_expl
                copy.never = false
                return copy;
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
            case 'helpful-one':
                chfeedback((state) => {
                    const copy = {...state}
                    copy.helpful = 1
                    return copy
                })
                break;
            case 'helpful-two':
                chfeedback((state) => {
                    const copy = {...state}
                    copy.helpful = 2
                    return copy
                })
                break;
            case 'helpful-three':
                chfeedback((state) => {
                    const copy = {...state}
                    copy.helpful = 3
                    return copy
                })
                break;
            case 'helpful-four':
                chfeedback((state) => {
                    const copy = {...state}
                    copy.helpful = 4
                    return copy
                })
                break;
    //new sn eio jfewio fjweiuf jweiuf jweiuf wehf uiwef ihwieu foja
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

    // console.log(feedback)


    // useEffect(() => {

    //     $('#Feedback').scroll((e) => {
    //         // console.log('scroll')
    //         //.scrollTop()
    //         // console.log( e?.target?.scrollHeight )
    //         // console.log( e?.target?.scrollTop )

    //         // const step = e?.target?.scrollHeight;
    //         // if (e?.target?.scrollTop < step) {
    //         //     e.target.scrollTop = 0
    //         // } else if (e?.target?.scrollTop < step*2) {
    //         //     e.target.scrollTop = step
    //         // } else if (e?.target?.scrollTop < step*3) {
    //         //     e.target.scrollTop = step*2 
    //         // }
    //     })



    // }, [])

    const resolvedHandler = (key) => {

        setResolved(key)

        // console.log(key)



        //move on the backend!

        // const data = JSON.stringify(feedback)
        // console.log(data)
        // console.log('...')
        console.log('timeout')
        timeout = setTimeout(() => {
            setState('failure')
            console.log('TIME OUT')
            $('#submit').attr("disabled", false);
        }, 10000)
        // console.log( feedback.email )
        // db.collection('feedbacks').doc(feedback.email).set(feedback).then(() => {
        //     clearTimeout(timeout);
        //     setState('success')
        //     console.log('operation successful')
        //     setTimeout(() => {
        //         chFeedbackPage(2)
        //         currIndex = 2
        //     }, 600)

        // }).catch(err => {
        //     setState('failure')
        //     // console.log('')
        //     console.log('here')
        //     console.error(err)
        //     $('#submit').attr("disabled", false);
        //     captchaRef.current.reset();
        // })
    }



    const submitHandler = (event) => {
        event.preventDefault()
        // event.target.disable()
        // console.log(event.target)


        // const db = firebase.firestore()
        // db.settings({
        //     timestampsInSnapshots: true
        // });
   
        //GETTING DATA
        // db.collection('feedbacks').get().then((snapshot) => {
        //     // console.log(snapshot.docs)
        //     snapshot.docs.forEach(doc => {
        //         console.log(doc.data())
        //     })
        // })
        
        //POSTING DATA

        //captcha
        // console.log('CAPTCHA NOW')
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
                        <h2>Was this explanation helpful?</h2>
                        {/* <input type="radio" id="helpful-one" name="helpful" value="not much" /> */}
                        {/* <label htmlFor="helpful-one">not much</label><br /> */}
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="helpful-one" name="helpful" value="not much" required/>
                            <i className="form-radio-button"></i>
                            <span>not at all</span>
                        </label>
                        {/* <input type="radio" id="helpful-two" name="helpful" value="no" />
                        <label htmlFor="helpful-two">no</label><br /> */}
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="helpful-two" name="helpful" value="no" required/>
                            <i className="form-radio-button"></i>
                            <span>no</span>
                        </label>
                        {/* <input type="radio" id="helpful-three" name="helpful" value="yes" /> */}
                        {/* <label htmlFor="helpful-three">yes</label><br /> */}
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="helpful-three" name="helpful" value="yes" required/>
                            <i className="form-radio-button"></i>
                            <span>yes</span>
                        </label>
                        {/* <input type="radio" id="helpful-four" name="helpful" value="very helpful!" />
                        <label htmlFor="helpful-four">very helpful!</label> */}
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="helpful-four" name="helpful" value="very helpful!" required/>
                            <i className="form-radio-button"></i>
                            <span>very helpful!</span>
                        </label>
                    </div>
                    <div className="field">
                        <h2>{`What about having a feature that \nautomatically explains any code you enter?`}</h2>
                        {/* <input type="radio" id="automatic-one" name="automatic" value="bad idea" />
                        <label htmlFor="automatic-one">bad idea</label><br /> */}
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="automatic-one" name="automatic" value="bad idea" />
                            <i className="form-radio-button"></i>
                            <span>bad idea</span>
                        </label>
                        {/* <input type="radio" id="automatic-two" name="automatic" value="boring" />
                        <label htmlFor="automatic-two">boring</label><br /> */}
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="automatic-two" name="automatic" value="boring" />
                            <i className="form-radio-button"></i>
                            <span>boring</span>
                        </label>
                        {/* <input type="radio" id="automatic-three" name="automatic" value="good idea" />
                        <label htmlFor="automatic-three">good idea</label><br /> */}
                        <label className="form-radio-label">
                            <input onChange={ChangeChkHandler} className="form-radio-field" type="radio" id="automatic-three" name="automatic" value="good idea" />
                            <i className="form-radio-button"></i>
                            <span>good idea</span>
                        </label>
                        {/* <input type="radio" id="automatic-four" name="automatic" value="great idea!" />
                        <label htmlFor="automatic-four">great idea!</label> */}
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
                    <div id="email_perm" style={{'display': 'none'}}>
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
                    </div>

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