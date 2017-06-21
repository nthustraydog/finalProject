import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';

import 'decorations/page_frame.css';
import 'decorations/carelife_style.css';

export default class CarelifePromotion extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div id = "introduction" className = "wow animated fadeInLeft">
				  <div className = "content">
					<h1>重要宣導</h1>
					<h2>●不可在餐廳與室內餵食</h2>
					<p>清大校園內，是禁止在餐廳、室內餵食狗狗的喔！若是在餐廳或任何系館、宿舍等室內餵食狗狗，將使狗狗養成在這些地方逗留乞食的壞習慣，也可能使牠們為了爭奪食物源而吵架，造成不喜歡狗狗的朋友們的困擾。此外，狗狗的腎臟較小，人類的食物過油過鹹，對狗狗的身體是非常大的負擔，狗狗無法分辨什麼食物對自身有害，這點還要讓我們人類來為牠們的健康把關囉！
					</p>
					<h2>●不可以餵狗吃骨頭！！！</h2>
					<p>千萬不要給狗狗吃骨頭喔！無論是雞骨、豬骨、牛骨都不可以！雖然在我們從小到大的觀念裡，狗就是要吃骨頭的，然而事實上吃骨頭可能會刺穿體內的器官而造成大出血，或是卡在腸道造成下痢或排便困難，很多狗狗就是因為吃了骨頭而一命嗚呼！
					</p>
					<p>除了骨頭以外，狗狗的飲食禁忌還有巧克力、咖啡、葡萄、洋蔥、大蒜、木醣醇（糖果）、果核、牛奶等。人類的食物因為重鹹重油，對狗狗的身體負擔很大（常駐小吃部附近的校浪有好幾隻腎指數都超標），若是想要餵狗狗吃東西，可以去便利商店買罐頭喔！他們會很愛你的！
					</p>
					<h2>●狗狗的肢體語言與安定訊號</h2>
					<p>遇見狗的時候，雖然會想要跟牠接觸，但有的時候如果方法弄錯了，可能會使狗狗感到焦慮。安定訊號就相當於狗狗之間通用的肢體語言，如果學會了安定訊號，就可以知道如何適當的安撫狗狗的情緒。
					</p>
					<p>想知道更多關於安定訊號的知識：
					<a href = "http://my.nthu.edu.tw/~srv9215/carelife2013/4-1calmingsignals.htm" target = "_blank">點我前往</a>
					</p>
				  </div>
				  <div className = "other-infor wow animated fadeInLeft">

					<div id = "link">
            <a href = "https://www.facebook.com/NthuCarelife/">
              <h1>粉專連結</h1>
            </a>
					</div>
					<div id = "donate">
						<h1>捐款資訊</h1>
						<p>◆若你想幫助狗狗們，可以捐款 / 捐物資 ( 飼料、罐頭等 )給我們，資金和物資將全數用在校浪身上
						</p>

						<h2>關懷生命社郵局戶口：</h2>
						<p>
						帳號 / 0061021 0605612
						<br></br>
						戶名 / 國立清華大學關懷生命社

						<br></br>
						( 可以 ATM 轉帳 )

						</p>

						<h2>台灣銀行新竹分行：</h2>
						<p>
						帳號 / 015036070041
						<br></br>
						戶名 / 國立清華大學 401 專戶

						<br></br>
						(須臨櫃匯款，並指名捐給清大關懷生命社 )

						</p>
					</div>
				</div>
			</div>
        );
    }
}
