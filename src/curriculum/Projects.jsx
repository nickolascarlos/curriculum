import AttributeWithContent from "../components/AttributeWithContent";
import Section from "../components/Section";
import Heap from "../components/Heap";

export default function Projects(props) {
    return (
        <Section title="Some Projects">
            <Heap perRow={2.1}>
                <AttributeWithContent
                    title="curriculum"
                    href="https://www.github.com/nickolascarlos/curriculum"
                    content={
                        <>
                            <div>                            
                                <img src="https://img.shields.io/github/license/nickolascarlos/curriculum?logo=github&style=flat-square" alt=""
                                    style={{
                                        height: '18px',
                                        marginRight: '5px'
                                    }}
                                />
                                <img src="https://shields.io/badge/-React/JSX-black?logo=react&style=flat-square&logoColor=lightblue" alt=""
                                    style={{
                                        height: '18px',
                                        marginRight: '5px'
                                    }}
                                />
                            </div>
                            <article style={{fontSize: 'small'}}>
                                If you're eager to see one of my projects, you're already looking at it 😉. This lovely resume here was made in React and its code is available on my GitHub, so if you want one like it, just head over there.
                            </article>
                        </>
                    }
                />
                
                <AttributeWithContent
                    title="brazil-cities-predictor"
                    href="https://www.github.com/nickolascarlos/brazil-cities-predictor"
                    content={
                        <>
                            <div>                            
                                <img src="https://img.shields.io/github/license/nickolascarlos/brazil-cities-predictor?logo=github&style=flat-square" alt=""
                                    style={{
                                        height: '18px',
                                        marginRight: '5px'
                                    }}
                                />
                                <img src="https://shields.io/badge/-TypeScript-blue?logo=typescript&style=flat-square&logoColor=white" alt=""
                                    style={{
                                        height: '18px',
                                        marginRight: '5px'
                                    }}
                                />
                            </div>
                            <article style={{fontSize: 'small'}}>
                                A predictor of Brazilian city names, useful for applications with text input fields that require selecting a Brazilian city. Written in Typescript and provided as an NPM package.
                            </article>
                        </>
                    }
                />

                <AttributeWithContent
                    title="hmac"
                    href="https://www.github.com/nickolascarlos/hmac"
                    content={
                        <>
                            <div>
                                <img src="https://img.shields.io/github/license/nickolascarlos/hmac?logo=github&style=flat-square" alt=""
                                    style={{
                                        height: '18px',
                                        marginRight: '5px'
                                    }}
                                />

                                <img src="https://shields.io/badge/-Python-yellow?logo=python&style=flat-square" alt=""
                                    style={{
                                        height: '18px'
                                    }}
                                />
                            </div>
                            <article style={{fontSize: 'small'}}>
                                "Hash-agnostic" implementation of an HMAC generator and authenticator in Python. This library was written with the aim of being used in an academic project implementing a secure peer-to-peer chat.
                            </article>
                        </>
                    }
                />

                <AttributeWithContent
                    title="class-validator-errors-flattener"
                    href="https://www.github.com/nickolascarlos/class-validator-errors-flattener"
                    content={
                        <>
                            <div>                            
                                <img src="https://img.shields.io/github/license/nickolascarlos/class-validator-errors-flattener?logo=github&style=flat-square" alt=""
                                    style={{
                                        height: '18px',
                                        marginRight: '5px'
                                    }}
                                />
                                <img src="https://shields.io/badge/-TypeScript-blue?logo=typescript&style=flat-square&logoColor=white" alt=""
                                    style={{
                                        height: '18px',
                                        marginRight: '5px'
                                    }}
                                />
                                </div>
                            <article style={{fontSize: 'small'}}>
                                Library for developers using the 'class-validator' library who want to provide a clear and readable way to display validation errors to the end user. Written in Typescript and provided as an NPM package.
                            </article>
                        </>
                    }
                />

                <AttributeWithContent
                    title="sadchat"
                    href="https://www.github.com/nickolascarlos/sadchat"
                    content={
                        <>
                            <div>
                                <img src="https://img.shields.io/github/license/nickolascarlos/sadchat?logo=github&style=flat-square" alt=""
                                    style={{
                                        height: '18px',
                                        marginRight: '5px'
                                    }}
                                />

                                <img src="https://shields.io/badge/-Python-yellow?logo=python&style=flat-square" alt=""
                                    style={{
                                        height: '18px'
                                    }}
                                />
                            </div>
                            <article style={{fontSize: 'small'}}>
                            Written in Python, SadChat is a terminal-based chat application that focuses on the security of its users. It directly connects two users and, with each message exchanged, verifies integrity and authenticity using the HMAC algorithm.
                            </article>
                            </>
                        }
                    />

                <AttributeWithContent
                    title="auto-video-gpt"
                    href="https://www.github.com/nickolascarlos/auto-video-gpt"
                    content={
                        <>
                            <div>                            
                                <img src="https://img.shields.io/github/license/nickolascarlos/sadchat?logo=github&style=flat-square" alt=""
                                    style={{
                                        height: '18px',
                                        marginRight: '5px'
                                    }}
                                />
                                
                                <img src="https://shields.io/badge/-Python-yellow?logo=python&style=flat-square" alt=""
                                    style={{
                                        height: '18px',
                                        marginRight: '5px'
                                    }}
                                />
                            </div>
                            <article style={{fontSize: 'small'}}>
                                An automated video creator, written in Python, that uses the OpenAI Text Completion API for generating textual content.
                            </article>
                        </>
                    }
                />
            </Heap>
        </Section>
    )
}