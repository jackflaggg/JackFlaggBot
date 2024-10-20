import {Scenes, Context} from "telegraf";
import LocalSession from "telegraf-session-local"


export interface MySessionScene extends Scenes.SceneSessionData {
    myProps: string;
}

export interface MySession extends Scenes.SceneSession<MySessionScene> {
    myProp: string
}

export interface MyContext extends Context {
    props: string;
    session: MySession;
    scene: Scenes.SceneContextScene<MyContext, MySessionScene>
}
