// Ϊ����չ�Կ��ǽ�����ŵ����棬�Ժ�ı�ֵʱ������һЩ
var heroColor = ['RGB(189,150,83)','RGB(221,202,128)'];
var enemyColor = ['blue','RGB(46,164,255)'];

function Tank(x,y,direct,speed,color) {
        this.x = x;
        this.y = y;
        this.direct = direct;
        this.speed = speed;
        this.color = color;
}

// ����
Tank.prototype.moveTop = function () {
    this.y -= this.speed;
    this.direct = 0;
}
// ����
Tank.prototype.moveRight = function () {
    this.x += this.speed;
    this.direct = 1;
}
// ����
Tank.prototype.moveDown = function () {
    this.y += this.speed;
    this.direct = 2;
}
// ����
Tank.prototype.moveLeft = function () {
    this.x -= this.speed;
    this.direct = 3;
}

// �ҷ���Ӣ��̹��
function Hero(x,y,direct,speed,color) {
    // �̳�����
    Tank.call(this,x,y,direct,speed,color)
}
// �̳�Tankԭ���еķ���
inheritPrototype(Hero,Tank);


// �з�̹��
function Enemy(x,y,direct,speed,color) {
    Tank.call(this,x,y,direct,speed,color);
}
inheritPrototype(Enemy,Tank);



function drawTank(tank) {
    //ѡ����Ʒ���
    switch (tank.direct) {
        // ����/��
        case 0:
            //�ϲ����
        case 2:  
            //����̹��
            ctx.fillStyle = tank.color[0];

            ctx.fillRect(tank.x,tank.y,5,30);  //����
            ctx.fillRect(tank.x+5+1,tank.y+5,10,20)  //����
            ctx.fillRect(tank.x+5+1+10+1,tank.y,5,30);  //����

            //����
            ctx.fillStyle = tank.color[1];
            ctx.arc(tank.x+11,tank.y+15,4,0,360,false);
            ctx.fill();

            //��Ͳ
            ctx.strokeStyle = tank.color[1];
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(tank.x+11,tank.y+15);
            // ���ݷ��������Ͳ�ķ���
            if (tank.direct === 0) {
                ctx.lineTo(tank.x+11,tank.y);
            }
            else if (tank.direct === 2) {
                ctx.lineTo(tank.x+11,tank.y+30);
            }
            ctx.closePath();
            ctx.stroke();
            break;

        // ����/��
        case 1:
                //�ϲ����
        case 3:
            //����̹��
            ctx.fillStyle = tank.color[0];

            ctx.fillRect(tank.x,tank.y,30,5);  // ����
            ctx.fillRect(tank.x+5,tank.y+5+1,20,10)  //����
            ctx.fillRect(tank.x,tank.y+5+1+10+1,30,5);  //����

            //����
            ctx.fillStyle = tank.color[1];
            ctx.arc(tank.x+15,tank.y+11,4,0,360,false);
            ctx.fill();

            //��Ͳ
            ctx.strokeStyle = tank.color[1];
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(tank.x+15,tank.y+11);
            // ���ݷ��������Ͳ�ķ���
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