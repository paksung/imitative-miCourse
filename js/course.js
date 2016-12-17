/* 
* @Author: pengshuang
* @Date:   2016-11-01 15:29:26
* @Last Modified time: 2016-11-01 20:20:18
*/


$(document).ready(function(){

    $(window).on('scroll',function(event){
        //当浏览器窗口底部滚动至离整个页面底部700px时，请求数据，并动态添加课程信息。
        if($(window).scrollTop()+$(window).height() >= $(document).height()-700){
            //模拟通过异步加载获得的数据，进行异步更新课程列表。
            
            //获得的课程信息数据
            var data_json = {
                'img_url':'img/literature.png',
                'course_title':'俄罗斯文学经典的当代意义',
                'comments':'51',
                'point':'4.8分',
                'tags':['3学分','通识课','文学院','董晓','社会','文学','法律'],
                'des':'老师旁征博引，讲课幽默引人入胜，不乏深刻的见地，对俄罗斯文学名著进行当代阐释，揭示其中永恒的美学价值和社会意义，注重文学和当代的联系，不会拘于文学，思想开放。'
            }
            //添加的课程li
            var html_str = '<li><div class="media"><div class="media-left"><div class="box-out"><div class="box-in"><img src="'+data_json.img_url+'" alt="" /></div></div></div><div class="media-body"><header><a href="#">'+data_json.course_title+'</a><a href="#"><span class="glyphicon glyphicon-comment"></span>'+data_json.comments+'</a></header><div class="point"> <img src="img/star.png" alt="" /> <img src="img/star.png" alt="" /> <img src="img/star.png" alt="" /> <img src="img/star.png" alt="" /> <img src="img/star.png" alt="" /> '+data_json.point+'</div><div class="tags"></div><p>'+data_json.des+'</p></div></div></li>';
            //将需要添加的课程li添加为ul最后一个子元素
            $("#sync-ul").append(html_str);
            //循环遍历该课程信息中的标签信息，添加至标签列表
            for(var i=0;i<data_json.tags.length;i++){
                $("#sync-ul>li:last .tags").append(' <a href="#">'+data_json.tags[i]+'</a>')
            }
        }
    });
    
    
});