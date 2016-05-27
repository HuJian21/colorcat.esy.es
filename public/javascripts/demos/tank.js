// 为了扩展性考虑将数组放到外面，以后改变值时会容易一些
var heroColor = ['RGB(189,150,83)','RGB(221,202,128)'];
var enemyColor = ['blue','RGB(46,164,255)'];

function Tank(x,y,direct,speed,color) {
        this.x = x;
        this.y = y;
        this.direct = direct;
        this.speed = speed;
        this.color = color;
}

// 上移
Tank.prototype.moveTop = function () {
    this.y -= this.speed;
    this.direct = 0;
}
// 右移
Tank.prototype.moveRight = function () {
    this.x += this.speed;
    this.direct = 1;
}
// 下移
Tank.prototype.moveDown = function () {
    this.y += this.speed;
    this.direct = 2;
}
// 左移
Tank.prototype.moveLeft = function () {
    this.x -= this.speed;
    this.direct = 3;
}

// 我方的英雄坦克
function Hero(x,y,direct,speed,color) {
    // 继承属性
    Tank.call(this,x,y,direct,speed,color)
}
// 继承Tank原型中的方法
inheritPrototype(Hero,Tank);


// 敌方坦克
function Enemy(x,y,direct,speed,color) {
    Tank.call(this,x,y,direct,speed,color);
}
inheritPrototype(Enemy,Tank);



function drawTank(tank) {
    //选择绘制方向
    switch (tank.direct) {
        // 向上/下
        case 0:
            //合并语句
        case 2:  
            //绘制坦克
            ctx.fillStyle = tank.color[0];

            ctx.fillRect(tank.x,tank.y,5,30);  //左轮
            ctx.fillRect(tank.x+5+1,tank.y+5,10,20)  //盖子
            ctx.fillRect(tank.x+5+1+10+1,tank.y,5,30);  //右轮

            //炮塔
            ctx.fillStyle = tank.color[1];
            ctx.arc(tank.x+11,tank.y+15,4,0,360,false);
            ctx.fill();

            //炮筒
            ctx.strokeStyle = tank.color[1];
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(tank.x+11,tank.y+15);
            // 根据方向绘制炮筒的方向
            if (tank.direct === 0) {
                ctx.lineTo(tank.x+11,tank.y);
            }
            else if (tank.direct === 2) {
                ctx.lineTo(tank.x+11,tank.y+30);
            }
            ctx.closePath();
            ctx.stroke();
            break;

        // 向左/右
        case 1:
                //合并语句
        case 3:
            //绘制坦克
            ctx.fillStyle = tank.color[0];

            ctx.fillRect(tank.x,tank.y,30,5);  // 上轮
            ctx.fillRect(tank.x+5,tank.y+5+1,20,10)  //盖子
            ctx.fillRect(tank.x,tank.y+5+1+10+1,30,5);  //下轮

            //炮塔
            ctx.fillStyle = tank.color[1];
            ctx.arc(tank.x+15,tank.y+11,4,0,360,false);
            ctx.fill();

            //炮筒
            ctx.strokeStyle = tank.color[1];
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(tank.x+15,tank.y+11);
            // 根据方向绘制炮筒的方向
            if (tank.direct === 1) {
                    ctx.lineTo(tank.x+30,tank.y+11);
            }
            else if (tank.direct === 3) {
                    ctx.lineTo(tank.x,tank.y+11);
            }
            ctx.closePath();
            ctx.stroke();
            break;
    }
}