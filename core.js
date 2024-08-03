class cmd{
    constructor(kwrd,func,sep){
        this.kwrd = kwrd;
        
        this.func = func;
        this.sep = sep;
    }
    exec(param){
        let ps = param.split(sep);
        this.func(ps);
    }
}
class env{
    cmds = [];
    constructor(name,desc){
        this.name = name;
        this.desc = desc;
    }
    describe(){
        return this.desc;
    }
    addCmd(cd){
        this.cmds.push(cd);
    }
    execute(text){
        var z = text.split(' ');

        for(var i of this.cmds){
            if(i.kwrd == z[0]){
                i.exec(z[1]);
                break;
            }
        }
    }
}