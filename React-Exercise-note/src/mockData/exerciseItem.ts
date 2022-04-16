// bodyPart 
// 分為
// 胸：chest
// 背：back
// 腿：leg
// 三角：deltoid
// 三頭：triceps
// 二頭：biceps
export enum exerciseBodyPart {
    chest = 'chest',
    back = 'back', 
    deltoid = 'deltoid',
    triceps = 'triceps',
    biceps = 'biceps'
}

export const exerciseItem = [
    {
        motionId:1,
        bodyPart:`${exerciseBodyPart.chest}`,
        name: '啞鈴胸推'
    },
    {
        motionId:2,
        bodyPart:exerciseBodyPart.chest,
        name: '槓鈴胸推'
    },
    {
        motionId:3,
        bodyPart:exerciseBodyPart.chest,
        name: '機械胸推'
    },
    {
        motionId:4,
        bodyPart:exerciseBodyPart.back,
        name: '引體向上'
    },
    {
        motionId:5,
        bodyPart:exerciseBodyPart.back,
        name: '機械背下拉'
    },
    {
        motionId:6,
        bodyPart:exerciseBodyPart.back,
        name: '機械背後拉'
    },
    {
        motionId:7,
        bodyPart:exerciseBodyPart.back,
        name: '啞鈴划船'
    },
    {
        motionId:8,
        bodyPart:exerciseBodyPart.deltoid,
        name: '機械肩推'
    },
    {
        motionId:9,
        bodyPart:exerciseBodyPart.deltoid,
        name: '臉拉'
    },
    {
        motionId:10,
        bodyPart:exerciseBodyPart.deltoid,
        name: '繩索提肩'
    },
    {
        motionId:11,
        bodyPart:exerciseBodyPart.deltoid,
        name: '空手側肩舉'
    },
    {
        motionId:12,
        bodyPart:exerciseBodyPart.triceps,
        name: '槓鈴窄胸推'
    },
    {
        motionId:13,
        bodyPart:exerciseBodyPart.triceps,
        name: '繩索下拉'
    },
    {
        motionId:14,
        bodyPart:exerciseBodyPart.triceps,
        name: '短槓鈴下拉'
    },
    {
        motionId:15,
        bodyPart:exerciseBodyPart.biceps,
        name: '二頭斜板寬舉（短頭）'
    },
    {
        motionId:16,
        bodyPart:exerciseBodyPart.biceps,
        name: '二頭機械舉'
    },

]