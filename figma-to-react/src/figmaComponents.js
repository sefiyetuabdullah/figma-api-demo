import React, { PureComponent } from 'react';
import { CSearchBar } from './components/CSearchBar';
import { CMenuDropDown } from './components/CMenuDropDown';
import { CAccountSettings } from './components/CAccountSettings';
import { CImageSlider } from './components/CImageSlider';
import { CHomePage } from './components/CHomePage';
import { CLoadingScreen } from './components/CLoadingScreen';
import { CSettingsPage } from './components/CSettingsPage';
import { CInventoryEntry } from './components/CInventoryEntry';
import { COrderTakeout } from './components/COrderTakeout';
import { CSearchPage } from './components/CSearchPage';
import { CFilterPage } from './components/CFilterPage';
import { CInventoryCheck } from './components/CInventoryCheck';
import { CInventoryCheckIndividualPage } from './components/CInventoryCheckIndividualPage';
import { CGarbageList } from './components/CGarbageList';
import { CRecipesHomePage } from './components/CRecipesHomePage';
import { CNEW } from './components/CNEW';
import { COrderTakeoutPage } from './components/COrderTakeoutPage';
import { CSelectButton } from './components/CSelectButton';
import { CLargeTextBox } from './components/CLargeTextBox';
import { COrderTakeoutAddNewRestaurant } from './components/COrderTakeoutAddNewRestaurant';
import { CNewNote } from './components/CNewNote';
import { CRecipeCategoryPage } from './components/CRecipeCategoryPage';
import { CSimilarRecipeSlider } from './components/CSimilarRecipeSlider';
import { CNotesBoxFull } from './components/CNotesBoxFull';
import { CRecipeIndivPage } from './components/CRecipeIndivPage';
import { CShoppingListHomePage } from './components/CShoppingListHomePage';
import { COldShoppingList } from './components/COldShoppingList';
import { CShoppingList } from './components/CShoppingList';
import { CShoppingListOldLists } from './components/CShoppingListOldLists';
import { CAddNewRecipe } from './components/CAddNewRecipe';
import { CMenuSetup } from './components/CMenuSetup';
import { CLogo } from './components/CLogo';
import { CStatusBar } from './components/CStatusBar';
import { CSigninPage } from './components/CSigninPage';

export class MasterMenuDropDown extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CMenuDropDown {...this.props} nodeId="11:54" />
    </div>
  }
}

export class MasterAccountSettings extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CAccountSettings {...this.props} nodeId="212:850" />
    </div>
  }
}

export class MasterHomePage extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CHomePage {...this.props} nodeId="1:3" />
    </div>
  }
}

export class MasterLoadingScreen extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(232, 113, 33, 1)"}}>
      <CLoadingScreen {...this.props} nodeId="11:95" />
    </div>
  }
}

export class MasterSettingsPage extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CSettingsPage {...this.props} nodeId="39:39" />
    </div>
  }
}

export class MasterSearchPage extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CSearchPage {...this.props} nodeId="154:1250" />
    </div>
  }
}

export class MasterFilterPage extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CFilterPage {...this.props} nodeId="154:1295" />
    </div>
  }
}

export class MasterInventoryCheck extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CInventoryCheck {...this.props} nodeId="42:78" />
    </div>
  }
}

export class MasterInventoryCheckIndividualPage extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CInventoryCheckIndividualPage {...this.props} nodeId="154:958" />
    </div>
  }
}

export class MasterGarbageList extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CGarbageList {...this.props} nodeId="227:847" />
    </div>
  }
}

export class MasterRecipesHomePage extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CRecipesHomePage {...this.props} nodeId="63:138" />
    </div>
  }
}

export class MasterOrderTakeoutPage extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <COrderTakeoutPage {...this.props} nodeId="154:871" />
    </div>
  }
}

export class MasterOrderTakeoutAddNewRestaurant extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <COrderTakeoutAddNewRestaurant {...this.props} nodeId="184:931" />
    </div>
  }
}

export class MasterNewNote extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CNewNote {...this.props} nodeId="184:1052" />
    </div>
  }
}

export class MasterRecipeCategoryPage extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CRecipeCategoryPage {...this.props} nodeId="75:113" />
    </div>
  }
}

export class MasterRecipeIndivPage extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CRecipeIndivPage {...this.props} nodeId="154:446" />
    </div>
  }
}

export class MasterShoppingListHomePage extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CShoppingListHomePage {...this.props} nodeId="103:200" />
    </div>
  }
}

export class MasterShoppingListOldLists extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CShoppingListOldLists {...this.props} nodeId="144:490" />
    </div>
  }
}

export class MasterAddNewRecipe extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CAddNewRecipe {...this.props} nodeId="184:1195" />
    </div>
  }
}

export class MasterMenuSetup extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CMenuSetup {...this.props} nodeId="226:779" />
    </div>
  }
}

export class MasterSigninPage extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(252, 252, 252, 1)"}}>
      <CSigninPage {...this.props} nodeId="217:1005" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "154:1342") return CSearchBar154D1342;
  if (id === "11:54") return CMenuDropDown11D54;
  if (id === "212:862") return CSearchBar212D862;
  if (id === "212:850") return CAccountSettings212D850;
  if (id === "154:437") return CImageSlider154D437;
  if (id === "1:3") return CHomePage1D3;
  if (id === "11:95") return CLoadingScreen11D95;
  if (id === "39:39") return CSettingsPage39D39;
  if (id === "154:1269") return CSearchBar154D1269;
  if (id === "154:1273") return CInventoryEntry154D1273;
  if (id === "154:1281") return COrderTakeout154D1281;
  if (id === "154:1250") return CSearchPage154D1250;
  if (id === "154:1299") return CSearchBar154D1299;
  if (id === "154:1295") return CFilterPage154D1295;
  if (id === "42:78") return CInventoryCheck42D78;
  if (id === "154:1102") return CSearchBar154D1102;
  if (id === "154:1044") return CInventoryEntry154D1044;
  if (id === "154:1052") return CInventoryEntry154D1052;
  if (id === "154:1060") return CInventoryEntry154D1060;
  if (id === "184:1239") return CInventoryEntry184D1239;
  if (id === "184:1289") return CInventoryEntry184D1289;
  if (id === "184:1281") return CInventoryEntry184D1281;
  if (id === "154:958") return CInventoryCheckIndividualPage154D958;
  if (id === "227:862") return CSearchBar227D862;
  if (id === "227:852") return CInventoryEntry227D852;
  if (id === "227:853") return CInventoryEntry227D853;
  if (id === "227:854") return CInventoryEntry227D854;
  if (id === "227:847") return CGarbageList227D847;
  if (id === "63:138") return CRecipesHomePage63D138;
  if (id === "154:918") return COrderTakeout154D918;
  if (id === "154:923") return COrderTakeout154D923;
  if (id === "154:929") return COrderTakeout154D929;
  if (id === "184:1025") return CNEW184D1025;
  if (id === "154:871") return COrderTakeoutPage154D871;
  if (id === "184:980") return CSearchBar184D980;
  if (id === "184:1044") return CSelectButton184D1044;
//  if (id === "I184:1004;184:1044") return CSelectButtonI184D1004S184:1044;
  if (id === "184:1014") return CLargeTextBox184D1014;
  if (id === "184:931") return COrderTakeoutAddNewRestaurant184D931;
  if (id === "184:1063") return CLargeTextBox184D1063;
  if (id === "184:1052") return CNewNote184D1052;
  if (id === "75:113") return CRecipeCategoryPage75D113;
  if (id === "154:759") return CSimilarRecipeSlider154D759;
  if (id === "154:536") return CNotesBoxFull154D536;
  if (id === "154:446") return CRecipeIndivPage154D446;
  if (id === "103:200") return CShoppingListHomePage103D200;
  if (id === "184:898") return COldShoppingList184D898;
  if (id === "184:904") return COldShoppingList184D904;
  if (id === "184:910") return COldShoppingList184D910;
  if (id === "184:916") return COldShoppingList184D916;
  if (id === "184:1297") return COldShoppingList184D1297;
  if (id === "184:1346") return COldShoppingList184D1346;
  if (id === "184:1352") return COldShoppingList184D1352;
  if (id === "184:1303") return COldShoppingList184D1303;
  if (id === "184:922") return CShoppingList184D922;
  if (id === "144:490") return CShoppingListOldLists144D490;
  if (id === "184:1195") return CAddNewRecipe184D1195;
  if (id === "226:779") return CMenuSetup226D779;
  if (id === "227:843") return CLogo227D843;
  if (id === "217:1061") return CStatusBar217D1061;
  if (id === "217:1005") return CSigninPage217D1005;
  return null;
}

class CSearchBar154D1342 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:1342;154:1089"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"1px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:1342;154:1087"
            style={{"marginLeft":13,"marginRight":263,"flexGrow":1,"marginTop":3,"marginBottom":3}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3851 15.4457C11.7348 17.5684 7.85538 17.4013 5.3986 14.9445C2.76256 12.3085 2.76256 8.03464 5.3986 5.3986C8.03464 2.76256 12.3085 2.76256 14.9445 5.3986C17.4013 7.85538 17.5684 11.7348 15.4457 14.3851L20.6014 19.5407C20.8943 19.8336 20.8943 20.3085 20.6014 20.6014C20.3085 20.8943 19.8336 20.8943 19.5407 20.6014L14.3851 15.4457ZM6.45926 13.8839C4.40901 11.8336 4.40901 8.50951 6.45926 6.45926C8.50951 4.40901 11.8336 4.40901 13.8839 6.45926C15.9326 8.50801 15.9341 11.8287 13.8884 13.8794C13.8869 13.8809 13.8854 13.8823 13.8839 13.8839C13.8824 13.8854 13.8809 13.8869 13.8794 13.8884C11.8288 15.9341 8.50801 15.9326 6.45926 13.8839Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CMenuDropDown11D54 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="17:58"
            style={{"marginLeft":81,"width":213,"minWidth":213,"height":null,"marginTop":25,"marginBottom":691,"minHeight":96,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I17:58;41:16"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/32bb/9945/177cf8287d1fb86a2655a749aae430a1)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="154:1342"
            style={{"marginLeft":36,"width":300,"minWidth":300,"height":null,"marginTop":-663,"marginBottom":633,"minHeight":30,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CSearchBar {...this.props} nodeId="154:1342" />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="154:856"
            style={{"marginLeft":30,"width":315,"minWidth":315,"height":null,"marginTop":-592,"marginBottom":92,"minHeight":500,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv">
                <div
                  id="212:838"
                  style={{"marginLeft":0,"width":315,"minWidth":315,"height":null,"marginTop":0,"marginBottom":460,"minHeight":40,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I212:838;11:119"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":-3,"marginBottom":3,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I212:838;11:119;37:8"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                              className="innerDiv"
                            >
                              <div>
                                <div style={{}} className="outerDiv centerer">
                                  <div
                                    id="I212:838;11:119;37:8;37:5"
                                    style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":1}} className="outerDiv centerer">
                                  <div
                                    id="I212:838;11:119;37:8;37:6"
                                    style={{"marginLeft":19.842529296875,"marginRight":19.842529296875,"flexGrow":1,"marginTop":4.2105255126953125,"marginBottom":4.2105255126953125,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":2}} className="outerDiv centerer">
                                  <div
                                    id="I212:838;11:119;37:8;37:7"
                                    style={{"marginLeft":84.3306884765625,"marginRight":84.3306884765625,"flexGrow":1,"marginTop":7.6842041015625,"marginBottom":8.3157958984375,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                      <span style={{}} key="end">Recipes</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="212:844"
                  style={{"marginLeft":0,"width":315,"minWidth":315,"height":null,"marginTop":-450,"marginBottom":410,"minHeight":40,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I212:844;11:119"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":-3,"marginBottom":3,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I212:844;11:119;37:8"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                              className="innerDiv"
                            >
                              <div>
                                <div style={{}} className="outerDiv centerer">
                                  <div
                                    id="I212:844;11:119;37:8;37:5"
                                    style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":1}} className="outerDiv centerer">
                                  <div
                                    id="I212:844;11:119;37:8;37:6"
                                    style={{"marginLeft":19.842529296875,"marginRight":19.842529296875,"flexGrow":1,"marginTop":4.2105255126953125,"marginBottom":4.2105255126953125,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":2}} className="outerDiv centerer">
                                  <div
                                    id="I212:844;11:119;37:8;37:7"
                                    style={{"marginLeft":84.3306884765625,"marginRight":84.3306884765625,"flexGrow":1,"marginTop":7.6842041015625,"marginBottom":8.3157958984375,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                      <span style={{}} key="end">Inventory Check</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv">
                <div
                  id="24:41"
                  style={{"marginLeft":0,"width":315,"minWidth":315,"height":null,"marginTop":-400,"marginBottom":360,"minHeight":40,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="11:119"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":-3,"marginBottom":3,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I11:119;37:8"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                              className="innerDiv"
                            >
                              <div>
                                <div style={{}} className="outerDiv centerer">
                                  <div
                                    id="I11:119;37:8;37:5"
                                    style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":1}} className="outerDiv centerer">
                                  <div
                                    id="I11:119;37:8;37:6"
                                    style={{"marginLeft":19.842529296875,"marginRight":19.842529296875,"flexGrow":1,"marginTop":4.2105255126953125,"marginBottom":4.2105255126953125,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":2}} className="outerDiv centerer">
                                  <div
                                    id="I11:119;37:8;37:7"
                                    style={{"marginLeft":84.3306884765625,"marginRight":84.3306884765625,"flexGrow":1,"marginTop":7.684211730957031,"marginBottom":8.315788269042969,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                      <span style={{}} key="end">Shopping List</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv">
                <div
                  id="212:775"
                  style={{"marginLeft":0,"width":315,"minWidth":315,"height":null,"marginTop":-350,"marginBottom":310,"minHeight":40,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I212:775;11:119"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":-3,"marginBottom":3,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I212:775;11:119;37:8"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                              className="innerDiv"
                            >
                              <div>
                                <div style={{}} className="outerDiv centerer">
                                  <div
                                    id="I212:775;11:119;37:8;37:5"
                                    style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":1}} className="outerDiv centerer">
                                  <div
                                    id="I212:775;11:119;37:8;37:6"
                                    style={{"marginLeft":19.842529296875,"marginRight":19.842529296875,"flexGrow":1,"marginTop":4.2105255126953125,"marginBottom":4.2105255126953125,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":2}} className="outerDiv centerer">
                                  <div
                                    id="I212:775;11:119;37:8;37:7"
                                    style={{"marginLeft":84.3306884765625,"marginRight":84.3306884765625,"flexGrow":1,"marginTop":7.684211730957031,"marginBottom":8.315788269042969,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                      <span style={{}} key="end">Garbage List</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":4}} className="outerDiv">
                <div
                  id="103:146"
                  style={{"marginLeft":0,"width":315,"minWidth":315,"height":null,"marginTop":-300,"marginBottom":260,"minHeight":40,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I103:146;11:119"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":-3,"marginBottom":3,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I103:146;11:119;37:8"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                              className="innerDiv"
                            >
                              <div>
                                <div style={{}} className="outerDiv centerer">
                                  <div
                                    id="I103:146;11:119;37:8;37:5"
                                    style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":1}} className="outerDiv centerer">
                                  <div
                                    id="I103:146;11:119;37:8;37:6"
                                    style={{"marginLeft":19.842529296875,"marginRight":19.842529296875,"flexGrow":1,"marginTop":4.210526466369629,"marginBottom":4.210524559020996,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":2}} className="outerDiv centerer">
                                  <div
                                    id="I103:146;11:119;37:8;37:7"
                                    style={{"marginLeft":84.3306884765625,"marginRight":84.3306884765625,"flexGrow":1,"marginTop":7.684210777282715,"marginBottom":8.315789222717285,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                      <span style={{}} key="end">Help</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":5}} className="outerDiv">
                <div
                  id="212:791"
                  style={{"marginLeft":0,"width":315,"minWidth":315,"height":null,"marginTop":-250,"marginBottom":210,"minHeight":40,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I212:791;11:119"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":-3,"marginBottom":3,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I212:791;11:119;37:8"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                              className="innerDiv"
                            >
                              <div>
                                <div style={{}} className="outerDiv centerer">
                                  <div
                                    id="I212:791;11:119;37:8;37:5"
                                    style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(255, 192, 30, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":1}} className="outerDiv centerer">
                                  <div
                                    id="I212:791;11:119;37:8;37:6"
                                    style={{"marginLeft":19.842529296875,"marginRight":19.842529296875,"flexGrow":1,"marginTop":4.2105255126953125,"marginBottom":4.2105255126953125,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":2}} className="outerDiv centerer">
                                  <div
                                    id="I212:791;11:119;37:8;37:7"
                                    style={{"marginLeft":84.3306884765625,"marginRight":84.3306884765625,"flexGrow":1,"marginTop":7.684211730957031,"marginBottom":8.315788269042969,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                      <span style={{}} key="end">Settings</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":6}} className="outerDiv">
                <div
                  id="184:1186"
                  style={{"marginLeft":0,"width":315,"minWidth":315,"height":null,"marginTop":-200,"marginBottom":160,"minHeight":40,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I184:1186;11:119"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":-3,"marginBottom":3,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I184:1186;11:119;37:8"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                              className="innerDiv"
                            >
                              <div>
                                <div style={{}} className="outerDiv centerer">
                                  <div
                                    id="I184:1186;11:119;37:8;37:5"
                                    style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(123, 97, 255, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":1}} className="outerDiv centerer">
                                  <div
                                    id="I184:1186;11:119;37:8;37:6"
                                    style={{"marginLeft":19.842529296875,"marginRight":19.842529296875,"flexGrow":1,"marginTop":4.2105255126953125,"marginBottom":4.2105255126953125,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":2}} className="outerDiv centerer">
                                  <div
                                    id="I184:1186;11:119;37:8;37:7"
                                    style={{"marginLeft":84.3306884765625,"marginRight":84.3306884765625,"flexGrow":1,"marginTop":7.684211730957031,"marginBottom":8.3157958984375,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                      <span style={{}} key="end">Upload Receipts</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":7}} className="outerDiv">
                <div
                  id="154:848"
                  style={{"marginLeft":0,"width":315,"minWidth":315,"height":null,"marginTop":-150,"marginBottom":110,"minHeight":40,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:848;11:119"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":-3,"marginBottom":3,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I154:848;11:119;37:8"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                              className="innerDiv"
                            >
                              <div>
                                <div style={{}} className="outerDiv centerer">
                                  <div
                                    id="I154:848;11:119;37:8;37:5"
                                    style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(232, 113, 33, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":1}} className="outerDiv centerer">
                                  <div
                                    id="I154:848;11:119;37:8;37:6"
                                    style={{"marginLeft":19.842529296875,"marginRight":19.842529296875,"flexGrow":1,"marginTop":4.2105255126953125,"marginBottom":4.2105255126953125,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":2}} className="outerDiv centerer">
                                  <div
                                    id="I154:848;11:119;37:8;37:7"
                                    style={{"marginLeft":84.3306884765625,"marginRight":84.3306884765625,"flexGrow":1,"marginTop":7.6842041015625,"marginBottom":8.3157958984375,"color":"rgba(232, 113, 33, 1)","fontSize":14,"fontWeight":700,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"italic","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                      <span style={{}} key="end">Order Takeout</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="11:71"
            style={{"width":"10.666666666666666%","marginLeft":"9.6%","height":"4.926108374384237%","top":"6.650246305418719%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0001 8.25006C20.9666 8.25006 21.7501 9.03356 21.7501 10.0001C21.7501 10.9666 20.9666 11.7501 20.0001 11.7501C19.0336 11.7501 18.2501 10.9666 18.2501 10.0001C18.2501 9.03356 19.0336 8.25006 20.0001 8.25006ZM20.0001 18.2501C20.9666 18.2501 21.7501 19.0336 21.7501 20.0001C21.7501 20.9666 20.9666 21.7501 20.0001 21.7501C19.0336 21.7501 18.2501 20.9666 18.2501 20.0001C18.2501 19.0336 19.0336 18.2501 20.0001 18.2501ZM20.0001 28.2501C20.9666 28.2501 21.7501 29.0336 21.7501 30.0001C21.7501 30.9666 20.9666 31.7501 20.0001 31.7501C19.0336 31.7501 18.2501 30.9666 18.2501 30.0001C18.2501 29.0336 19.0336 28.2501 20.0001 28.2501Z" fill="black" stroke="black" stroke-width="1.5"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="212:801"
            style={{"width":"8%","marginLeft":"83.46666666666667%","height":"3.6945812807881775%","top":"7.266009852216749%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.6875 9.375C9.6875 6.44099 12.066 4.0625 15 4.0625C17.934 4.0625 20.3125 6.44099 20.3125 9.375C20.3125 12.309 17.934 14.6875 15 14.6875C12.066 14.6875 9.6875 12.309 9.6875 9.375ZM15 5.9375C13.1015 5.9375 11.5625 7.47652 11.5625 9.375C11.5625 11.2735 13.1015 12.8125 15 12.8125C16.8985 12.8125 18.4375 11.2735 18.4375 9.375C18.4375 7.47652 16.8985 5.9375 15 5.9375Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.4375C8.4467 18.4375 7.1875 19.6967 7.1875 21.25V22.7354C7.1875 22.758 7.20389 22.7773 7.22621 22.7809C12.3747 23.6215 17.6253 23.6215 22.7738 22.7809C22.7961 22.7773 22.8125 22.758 22.8125 22.7354V21.25C22.8125 19.6967 21.5533 18.4375 20 18.4375H19.5739C19.541 18.4375 19.5082 18.4427 19.4769 18.4529L18.395 18.8062C16.189 19.5265 13.811 19.5265 11.605 18.8062L10.5231 18.4529C10.4918 18.4427 10.459 18.4375 10.4261 18.4375H10ZM5.3125 21.25C5.3125 18.6612 7.41116 16.5625 10 16.5625H10.4261C10.6567 16.5625 10.8859 16.599 11.1051 16.6706L12.187 17.0238C14.0148 17.6207 15.9852 17.6207 17.813 17.0238L18.8949 16.6706C19.1141 16.599 19.3433 16.5625 19.5739 16.5625H20C22.5888 16.5625 24.6875 18.6612 24.6875 21.25V22.7354C24.6875 23.6769 24.0051 24.4797 23.0759 24.6314C17.7274 25.5046 12.2726 25.5046 6.92409 24.6314C5.99485 24.4797 5.3125 23.6769 5.3125 22.7354V21.25Z" fill="black"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CSearchBar212D862 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I212:862;154:1089"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"1px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I212:862;154:1087"
            style={{"marginLeft":13,"marginRight":263,"flexGrow":1,"marginTop":3,"marginBottom":3}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3851 15.4457C11.7349 17.5684 7.85544 17.4013 5.39866 14.9445C2.76262 12.3085 2.76262 8.03464 5.39866 5.3986C8.0347 2.76256 12.3086 2.76256 14.9446 5.3986C17.4014 7.85538 17.5685 11.7348 15.4458 14.3851L20.6014 19.5407C20.8943 19.8336 20.8943 20.3085 20.6014 20.6014C20.3085 20.8943 19.8337 20.8943 19.5408 20.6014L14.3851 15.4457ZM6.45932 13.8839C4.40907 11.8336 4.40907 8.50951 6.45932 6.45926C8.50957 4.40901 11.8337 4.40901 13.8839 6.45926C15.9327 8.50801 15.9342 11.8287 13.8885 13.8794C13.8869 13.8809 13.8854 13.8823 13.8839 13.8839C13.8824 13.8854 13.8809 13.8869 13.8794 13.8884C11.8288 15.9341 8.50807 15.9326 6.45932 13.8839Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CAccountSettings212D850 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="212:852"
            style={{"marginLeft":81,"width":213,"minWidth":213,"height":null,"marginTop":25,"marginBottom":691,"minHeight":96,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I212:852;41:16"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/32bb/9945/177cf8287d1fb86a2655a749aae430a1)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="212:862"
            style={{"marginLeft":36,"width":300,"minWidth":300,"height":null,"marginTop":-664,"marginBottom":634,"minHeight":30,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CSearchBar {...this.props} nodeId="212:862" />
          </div>
        </div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="212:851"
            style={{"width":"10.666666666666666%","marginLeft":"9.6%","height":"4.926108374384237%","top":"6.650246305418719%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 8.25006C20.9665 8.25006 21.75 9.03356 21.75 10.0001C21.75 10.9666 20.9665 11.7501 20 11.7501C19.0335 11.7501 18.25 10.9666 18.25 10.0001C18.25 9.03356 19.0335 8.25006 20 8.25006ZM20 18.2501C20.9665 18.2501 21.75 19.0336 21.75 20.0001C21.75 20.9666 20.9665 21.7501 20 21.7501C19.0335 21.7501 18.25 20.9666 18.25 20.0001C18.25 19.0336 19.0335 18.2501 20 18.2501ZM20 28.2501C20.9665 28.2501 21.75 29.0336 21.75 30.0001C21.75 30.9666 20.9665 31.7501 20 31.7501C19.0335 31.7501 18.25 30.9666 18.25 30.0001C18.25 29.0336 19.0335 28.2501 20 28.2501Z" fill="black" stroke="black" stroke-width="1.5"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="212:910"
            style={{"width":"6.4%","marginLeft":"83.46666666666667%","height":"2.955665024630542%","top":"7.8817733990147785%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0303 8.53033C11.3232 8.23744 11.3232 7.76256 11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967L5.96967 11.4697C5.82322 11.6161 5.75 11.8081 5.75 12C5.75 12.1017 5.77024 12.1987 5.80691 12.2871C5.84351 12.3755 5.89776 12.4584 5.96967 12.5303L9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303C11.3232 16.2374 11.3232 15.7626 11.0303 15.4697L8.31066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H8.31066L11.0303 8.53033Z" fill="black"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CImageSlider154D437 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:437;217:1152"
            style={{"marginLeft":-0.6529083251953125,"marginRight":0.6529083251953125,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:437;217:1153"
                  style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/033b/cf52/d112a0bef0b81b237ffb4d3a4f113417)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I154:437;217:1134"
                  style={{"width":"60.24107259114583%","marginLeft":"-6.26785888671875%","height":"17.261896812678064%","top":"74.4047698539886%"}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="226" height="38" viewBox="0 0 226 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 15.0064C0 6.71859 6.71858 0 15.0064 0H210.994C219.281 0 226 6.71858 226 15.0064V22.878C226 31.1658 219.281 37.8844 210.994 37.8844H15.0064C6.71859 37.8844 0 31.1658 0 22.878V15.0064Z" fill="#FCFCFC"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I154:437;217:1154"
                  style={{"width":"66.50000813802083%","marginLeft":"4.57589111328125%","height":"9.82905982905983%","top":"74.52685407763532%","color":"rgba(151, 151, 151, 1)","fontSize":10,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"256.00000381469727%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">New Recipe:</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I154:437;217:1155"
                  style={{"width":"66.50000813802083%","marginLeft":"4.57589111328125%","height":"9.82905982905983%","top":"80.47161569622507%","color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">30 - 40 min: Roast Chicken</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:437;154:405"
            style={{"marginLeft":165.9375,"marginRight":170.25,"flexGrow":1,"marginTop":209.0625,"marginBottom":4.6875}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="39" height="6" viewBox="0 0 39 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle r="2.8125" transform="matrix(1.00483 0 0 -1.00483 2.82608 2.82608)" fill="white"/>
<circle r="2.8125" transform="matrix(1.00483 0 0 -1.00483 19.2174 2.82608)" fill="#C4C4C4"/>
<circle r="2.8125" transform="matrix(1.00483 0 0 -1.00483 36.1739 2.82608)" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CHomePage1D3 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":20}} className="outerDiv">
          <div
            id="77:175"
            style={{"marginLeft":-18,"width":414,"minWidth":414,"height":null,"marginTop":0,"marginBottom":1222,"minHeight":100,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":23}} className="outerDiv">
          <div
            id="217:1191"
            style={{"marginLeft":80,"width":213,"minWidth":213,"height":null,"marginTop":-1287,"marginBottom":1176,"minHeight":111,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv">
                <div
                  id="217:1079"
                  style={{"marginLeft":53,"width":110,"minWidth":110,"height":null,"marginTop":0,"marginBottom":1,"minHeight":110}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="55" cy="55" r="54" fill="#E87121" stroke="white" stroke-width="2"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="17:54"
                  style={{"marginLeft":0,"width":213,"minWidth":213,"height":null,"marginTop":-96,"marginBottom":0,"minHeight":96,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I17:54;41:15"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/455a/c320/35f0178ad5672a0487965663f820dd23)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="154:437"
            style={{"marginLeft":1,"width":375,"minWidth":375,"height":null,"marginTop":-1223,"marginBottom":1003.625,"minHeight":219.375,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CImageSlider {...this.props} nodeId="154:437" />
          </div>
        </div>
        <div style={{"zIndex":18}} className="outerDiv">
          <div
            id="217:1188"
            style={{"marginLeft":22,"width":331,"minWidth":331,"height":null,"marginTop":-989,"marginBottom":859,"minHeight":130,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{"zIndex":2}} className="outerDiv">
                <div
                  id="217:1121"
                  style={{"marginLeft":66,"width":198.60000610351562,"minWidth":198.60000610351562,"height":null,"marginTop":65,"marginBottom":15,"minHeight":50,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I217:1121;217:1117"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(133, 159, 136, 1)","border":"2px solid rgba(150, 201, 192, 1)"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I217:1121;217:1119"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"color":"rgba(255, 255, 255, 1)","fontSize":13,"fontWeight":700,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"italic","lineHeight":"123.07692527770996%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">this week’s menu</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="217:1187"
                  style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/ce61/6e4f/b27052723afab81e8adc1e7ffa85f3b4)","backgroundSize":"cover","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="217:1125"
                  style={{"width":"24.00000073758497%","marginLeft":"37.93957298255759%","height":"64.61538461538461%","top":"6.923076923076923%"}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="80" height="84" viewBox="0 0 80 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_217_1125)">
<path d="M0 39.72C0 17.7832 17.7833 0 39.72 0C61.6567 0 79.44 17.7832 79.44 39.72V44.28C79.44 66.2168 61.6567 84 39.72 84C17.7833 84 0 66.2168 0 44.28V39.72Z" fill="url(#paint0_linear_217_1125)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M85.8164 48.5057C85.8164 48.5057 74.5511 40.9646 66.0422 40.9646C54.7869 40.9646 47.2617 51.2493 38.1572 51.2493C27.5464 51.2493 26.2112 48.2774 20.261 48.2774C11.8514 48.2774 0.752007 53.8502 -5.10154 51.8389C-9.82524 50.2158 -15.512 46.9375 -15.512 46.9375V74.4648L85.8164 76.1193V48.5057Z" fill="url(#paint1_linear_217_1125)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M-13.8419 66.897C-13.8419 66.897 -13.3282 49.5787 -1.68291 46.8708C8.49883 45.2604 16.3487 57.7596 25.4531 57.7596C36.064 57.7596 41.0646 50.5057 51.3667 50.5057C58.8805 50.5057 66.2176 56.8123 76.4496 54.6262C99.1766 49.7706 87.4865 48.9375 87.4865 48.9375V76.4648L-13.8419 78.1193V66.897Z" fill="url(#paint2_linear_217_1125)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M-2.9025 68.0033C-2.9025 68.0033 1.986 61.0561 5.82246 60.3567C9.65893 59.6573 11.7823 66.4294 11.7823 66.4294C11.7823 66.4294 13.5785 66.1331 14.5541 66.4294C15.5297 66.7257 16.3023 68.0033 16.3023 68.0033C16.3023 68.0033 17.5449 63.9224 22.7046 63.9224C27.8644 63.9224 30.4858 69.4356 30.4858 69.4356C30.4858 69.4356 32.2033 68.0033 33.9919 68.0033C35.7805 68.0033 37.8051 69.4356 37.8051 69.4356C37.8051 69.4356 39.0685 63.9224 44.3996 63.9224C49.7306 63.9224 52.0046 68.601 52.0046 68.601C52.0046 68.601 54.1586 67.164 56.2515 67.164C58.3444 67.164 60.8419 68.601 60.8419 68.601C60.8419 68.601 61.5428 64.062 64.6603 61.3867C67.7778 58.7114 74.5656 60.3567 74.5656 60.3567L78.2785 62.4234V84H-2.9025V68.0033Z" fill="url(#paint3_linear_217_1125)"/>
<ellipse cx="49.1772" cy="20" rx="6.62" ry="7" fill="#FEFFCA"/>
</g>
<defs>
<linearGradient id="paint0_linear_217_1125" x1="0" y1="0" x2="0" y2="84" gradientUnits="userSpaceOnUse">
<stop stop-color="#A2E9FF"/>
<stop offset="0.552083" stop-color="#DDFDFF"/>
</linearGradient>
<linearGradient id="paint1_linear_217_1125" x1="85.8164" y1="40.9646" x2="85.8164" y2="76.1193" gradientUnits="userSpaceOnUse">
<stop stop-color="#AAF3FA"/>
<stop offset="1" stop-color="#D5FAFD"/>
</linearGradient>
<linearGradient id="paint2_linear_217_1125" x1="-13.8419" y1="46.7275" x2="-13.8419" y2="78.1193" gradientUnits="userSpaceOnUse">
<stop stop-color="#7EDEE7"/>
<stop offset="1" stop-color="#B5F1F5"/>
</linearGradient>
<linearGradient id="paint3_linear_217_1125" x1="-2.9025" y1="59.7302" x2="-2.9025" y2="84" gradientUnits="userSpaceOnUse">
<stop stop-color="#4297A8"/>
<stop offset="1" stop-color="#77C8D3"/>
</linearGradient>
<clipPath id="clip0_217_1125">
<path d="M0 39.72C0 17.7832 17.7833 0 39.72 0C61.6567 0 79.44 17.7832 79.44 39.72V44.28C79.44 66.2168 61.6567 84 39.72 84C17.7833 84 0 66.2168 0 44.28V39.72Z" fill="white"/>
</clipPath>
</defs>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="14:44"
            style={{"marginLeft":22,"width":331,"minWidth":331,"height":null,"marginTop":-839,"marginBottom":692,"minHeight":147,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I14:44;43:35"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":1.42718505859375,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.10000000149011612)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I14:44;43:40"
                  style={{"marginLeft":220.1707763671875,"marginRight":0.495849609375,"flexGrow":1,"marginTop":74.21359252929688,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)","borderRadius":"0px 0px 30px 0px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I14:44;43:41"
                  style={{"marginLeft":110.08538818359375,"marginRight":110.58126831054688,"flexGrow":1,"marginTop":74.21359252929688,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I14:44;43:43"
                  style={{"marginLeft":0,"marginRight":220.66668701171875,"flexGrow":1,"marginTop":74.21359252929688,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)","borderRadius":"0px 0px 0px 30px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":4}} className="outerDiv centerer">
                <div
                  id="I14:44;43:36"
                  style={{"marginLeft":220.1707763671875,"marginRight":0.495849609375,"flexGrow":1,"marginTop":1.141754150390625,"marginBottom":73.07183837890625,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)","borderRadius":"0px 30px 0px 0px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":5}} className="outerDiv centerer">
                <div
                  id="I14:44;43:38"
                  style={{"marginLeft":110.08538818359375,"marginRight":110.58126831054688,"flexGrow":1,"marginTop":1.141754150390625,"marginBottom":73.07183837890625,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":6}} className="outerDiv centerer">
                <div
                  id="I14:44;43:42"
                  style={{"marginLeft":0,"marginRight":220.66668701171875,"flexGrow":1,"marginTop":1.141754150390625,"marginBottom":73.07183837890625,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)","borderRadius":"30px 0px 0px 0px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":9}} className="outerDiv">
          <div
            id="77:188"
            style={{"marginLeft":55,"width":41,"minWidth":41,"height":null,"marginTop":-801,"marginBottom":777,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Recipes</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":10}} className="outerDiv">
          <div
            id="77:189"
            style={{"marginLeft":144,"width":87,"minWidth":87,"height":null,"marginTop":-801,"marginBottom":777,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Inventory Check</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":11}} className="outerDiv">
          <div
            id="77:190"
            style={{"marginLeft":263,"width":72,"minWidth":72,"height":null,"marginTop":-801,"marginBottom":777,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Shopping List</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":12}} className="outerDiv">
          <div
            id="77:191"
            style={{"marginLeft":45,"width":67,"minWidth":67,"height":null,"marginTop":-729,"marginBottom":705,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Garbage List</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":13}} className="outerDiv">
          <div
            id="77:192"
            style={{"marginLeft":167,"width":43,"minWidth":43,"height":null,"marginTop":-729,"marginBottom":705,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Settings</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":14}} className="outerDiv">
          <div
            id="96:125"
            style={{"marginLeft":283,"width":26,"minWidth":26,"height":null,"marginTop":-729,"marginBottom":705,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Help</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":17}} className="outerDiv">
          <div
            id="217:1133"
            style={{"marginLeft":19,"width":341,"minWidth":341,"height":null,"marginTop":-671,"marginBottom":524,"minHeight":147,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{"zIndex":2}} className="outerDiv">
                <div
                  id="217:1088"
                  style={{"marginLeft":44,"width":110,"minWidth":110,"height":null,"marginTop":0,"marginBottom":37,"minHeight":110}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="55" cy="55" r="55" fill="#E87121"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv">
                <div
                  id="217:1089"
                  style={{"marginLeft":186,"width":110,"minWidth":110,"height":null,"marginTop":-147,"marginBottom":37,"minHeight":110}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="55" cy="55" r="55" fill="#E87121"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":7}} className="outerDiv">
                <div
                  id="217:1110"
                  style={{"marginLeft":229,"width":24,"minWidth":24,"height":null,"marginTop":-115,"marginBottom":91,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":40,"fontWeight":700,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"64.00000095367432%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">6</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":5}} className="outerDiv">
                <div
                  id="217:1107"
                  style={{"marginLeft":85,"width":24,"minWidth":24,"height":null,"marginTop":-114,"marginBottom":90,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":40,"fontWeight":700,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"64.00000095367432%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">4</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":6}} className="outerDiv">
                <div
                  id="217:1109"
                  style={{"marginLeft":226,"width":31,"minWidth":31,"height":null,"marginTop":-90,"marginBottom":66,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":12,"fontWeight":700,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">meals</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":4}} className="outerDiv">
                <div
                  id="217:1108"
                  style={{"marginLeft":87,"width":25,"minWidth":25,"height":null,"marginTop":-89,"marginBottom":65,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":12,"fontWeight":700,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">days</span>
                  </div>
                </div>
              </div>
              <div style={{}} className="outerDiv">
                <div
                  id="217:1113"
                  style={{"marginLeft":0,"width":200,"minWidth":200,"height":null,"marginTop":-45,"marginBottom":-7,"minHeight":52,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="217:1112"
                        style={{"marginLeft":34,"marginRight":36,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="217:1111"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":24,"marginBottom":18,"color":"rgba(130, 130, 130, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"italic","lineHeight":"133.3333396911621%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="18">until you need to </span>
                          <br key="br18" />
                          <span style={{}} key="end">order groceries</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="217:1114"
                  style={{"marginLeft":141,"width":200,"minWidth":200,"height":null,"marginTop":-45,"marginBottom":-7,"minHeight":52,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I217:1114;217:1112"
                        style={{"marginLeft":34,"marginRight":36,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I217:1114;217:1111"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":24,"marginBottom":18,"color":"rgba(130, 130, 130, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"italic","lineHeight":"133.3333396911621%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="18">left in this weeks</span>
                          <br key="br18" />
                          <span style={{}} key="end"> mealprep</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="217:1077"
            style={{"marginLeft":0,"width":375,"minWidth":375,"height":null,"marginTop":-633,"marginBottom":268,"minHeight":365}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="375" height="365" viewBox="0 0 375 365" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 30C0 13.4315 13.4315 0 30 0H345C361.569 0 375 13.4315 375 30V335C375 351.569 361.569 365 345 365H30C13.4315 365 0 351.569 0 335V30Z" fill="#BDCDBE"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="184:1107"
            style={{"marginLeft":27,"width":322,"minWidth":322,"height":null,"marginTop":-496,"marginBottom":299,"minHeight":197,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{"zIndex":2}} className="outerDiv">
                <div
                  id="77:195"
                  style={{"marginLeft":4,"width":49,"minWidth":49,"height":null,"marginTop":0,"marginBottom":173,"minHeight":24,"color":"rgba(252, 252, 252, 1)","fontSize":18,"fontWeight":800,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"142.22222328186035%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Alerts</span>
                  </div>
                </div>
              </div>
              <div style={{}} className="outerDiv">
                <div
                  id="99:149"
                  style={{"marginLeft":0,"width":321,"minWidth":321,"height":null,"marginTop":-166,"marginBottom":90,"minHeight":76,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="77:193"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"backgroundColor":"rgba(159, 183, 162, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="77:194"
                        style={{"marginLeft":91,"marginRight":98,"flexGrow":1,"marginTop":39,"marginBottom":13,"color":"rgba(255, 255, 255, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">URGENT: Toss SPINACH</span>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":2}} className="outerDiv centerer">
                      <div
                        id="99:148"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":45,"backgroundColor":"rgba(159, 183, 162, 1)","borderRadius":"15px 15px 0px 0px"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":3}} className="outerDiv centerer">
                      <div
                        id="77:196"
                        style={{"marginLeft":117,"marginRight":116,"flexGrow":1,"marginTop":12,"marginBottom":40,"color":"rgba(255, 255, 255, 1)","fontSize":15,"fontWeight":900,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Garbage List:</span>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":4}} className="outerDiv centerer">
                      <div
                        id="103:127"
                        style={{"marginLeft":289,"marginRight":12,"flexGrow":1,"marginTop":17,"marginBottom":39}}
                        className="innerDiv"
                      >
                        <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33335 1.875C7.98818 1.875 7.70835 2.15482 7.70835 2.5V3.125H4.16669C3.82151 3.125 3.54169 3.40482 3.54169 3.75C3.54169 4.09518 3.82151 4.375 4.16669 4.375H15.8334C16.1785 4.375 16.4584 4.09518 16.4584 3.75C16.4584 3.40482 16.1785 3.125 15.8334 3.125H12.2917V2.5C12.2917 2.15482 12.0119 1.875 11.6667 1.875H8.33335Z" fill="white"/>
<path d="M8.33335 8.875C8.67853 8.875 8.95835 9.15482 8.95835 9.5L8.95835 15.3333C8.95835 15.6785 8.67853 15.9583 8.33335 15.9583C7.98818 15.9583 7.70835 15.6785 7.70835 15.3333V9.5C7.70835 9.15482 7.98818 8.875 8.33335 8.875Z" fill="white"/>
<path d="M12.2917 9.5C12.2917 9.15482 12.0119 8.875 11.6667 8.875C11.3215 8.875 11.0417 9.15482 11.0417 9.5V15.3333C11.0417 15.6785 11.3215 15.9583 11.6667 15.9583C12.0119 15.9583 12.2917 15.6785 12.2917 15.3333V9.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.99287 6.59765C5.02804 6.28113 5.29558 6.04167 5.61405 6.04167H14.386C14.7045 6.04167 14.972 6.28113 15.0072 6.59765L15.174 8.09877C15.4763 10.8199 15.4763 13.5661 15.174 16.2872L15.1575 16.435C15.0375 17.5151 14.2004 18.3764 13.1241 18.5271C11.0515 18.8172 8.94854 18.8172 6.87592 18.5271C5.79964 18.3764 4.96252 17.5151 4.8425 16.435L4.82608 16.2872C4.52374 13.5661 4.52374 10.8199 4.82608 8.09877L4.99287 6.59765ZM6.17345 7.29167L6.06844 8.23681C5.77629 10.8662 5.77629 13.5198 6.06844 16.1492L6.08486 16.2969C6.14178 16.8092 6.53879 17.2177 7.04923 17.2891C9.00688 17.5632 10.9932 17.5632 12.9508 17.2891C13.4612 17.2177 13.8583 16.8092 13.9152 16.2969L13.9316 16.1492C14.2237 13.5198 14.2237 10.8662 13.9316 8.23681L13.8266 7.29167H6.17345Z" fill="white"/>
</svg>
`}} />
                      </div>
                    </div>
                    <div style={{"zIndex":5}} className="outerDiv centerer">
                      <div
                        id="216:975"
                        style={{"marginLeft":64,"marginRight":233,"flexGrow":1,"marginTop":38,"marginBottom":14}}
                        className="innerDiv"
                      >
                        <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z" fill="#FFC01E"/>
<path d="M12 11.75C12.4142 11.75 12.75 12.0858 12.75 12.5V17.5C12.75 17.9142 12.4142 18.25 12 18.25C11.5858 18.25 11.25 17.9142 11.25 17.5V12.5C11.25 12.0858 11.5858 11.75 12 11.75Z" fill="#FFC01E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2703 3.99264C13.1784 2.39497 10.8216 2.39496 9.72961 3.99263L9.29769 4.62458C6.59165 8.58379 4.26669 12.7904 2.35396 17.1881L2.26374 17.3955C1.58969 18.9453 2.60805 20.705 4.2876 20.8927C9.41323 21.4656 14.5867 21.4656 19.7124 20.8927C21.3919 20.705 22.4103 18.9453 21.7362 17.3955L21.646 17.1881C19.7333 12.7904 17.4083 8.5838 14.7023 4.62458L14.2703 3.99264ZM10.968 4.83904C11.4643 4.11283 12.5356 4.11283 13.032 4.83904L13.4639 5.47099C16.1165 9.35201 18.3955 13.4755 20.2705 17.7864L20.3607 17.9938C20.6321 18.6178 20.222 19.3264 19.5458 19.402C14.5309 19.9625 9.46911 19.9625 4.4542 19.402C3.77791 19.3264 3.36785 18.6178 3.63927 17.9938L3.72948 17.7864C5.60443 13.4755 7.88348 9.352 10.5361 5.47099L10.968 4.83904Z" fill="#FFC01E"/>
</svg>
`}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="103:137"
                  style={{"marginLeft":1,"width":321,"minWidth":321,"height":null,"marginTop":-76,"marginBottom":0,"minHeight":76,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="99:150"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I99:150;77:193"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"backgroundColor":"rgba(73, 96, 166, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I99:150;77:194"
                              style={{"marginLeft":94,"marginRight":100,"flexGrow":1,"marginTop":39,"marginBottom":13,"color":"rgba(255, 255, 255, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{"fontWeight":800,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="6">URGENT</span>
                                <span style={{}} key="16">: Restock </span>
                                <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end">RICE</span>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I99:150;99:148"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":45,"backgroundColor":"rgba(73, 96, 166, 1)","borderRadius":"15px 15px 0px 0px"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":3}} className="outerDiv centerer">
                            <div
                              id="I99:150;77:196"
                              style={{"marginLeft":114,"marginRight":112,"flexGrow":1,"marginTop":12,"marginBottom":40,"color":"rgba(255, 255, 255, 1)","fontSize":15,"fontWeight":900,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Shopping List:</span>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":4}} className="outerDiv centerer">
                            <div
                              id="I99:150;103:127"
                              style={{"marginLeft":289,"marginRight":12,"flexGrow":1,"marginTop":17,"marginBottom":39,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":5}} className="outerDiv centerer">
                            <div
                              id="I99:150;216:975"
                              style={{"marginLeft":64,"marginRight":233,"flexGrow":1,"marginTop":38,"marginBottom":14}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 9C13 9.55229 12.5523 10 12 10C11.4477 10 11 9.55229 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z" fill="#FFC01E"/>
<path d="M12 11.75C12.4142 11.75 12.75 12.0858 12.75 12.5V17.5C12.75 17.9142 12.4142 18.25 12 18.25C11.5858 18.25 11.25 17.9142 11.25 17.5V12.5C11.25 12.0858 11.5858 11.75 12 11.75Z" fill="#FFC01E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2703 3.99264C13.1784 2.39497 10.8216 2.39497 9.72961 3.99264L9.29769 4.62458C6.59165 8.5838 4.26669 12.7904 2.35396 17.1881L2.26374 17.3955C1.58969 18.9453 2.60805 20.705 4.2876 20.8927C9.41323 21.4656 14.5867 21.4656 19.7124 20.8927C21.3919 20.705 22.4103 18.9453 21.7362 17.3955L21.646 17.1881C19.7333 12.7904 17.4083 8.5838 14.7023 4.62459L14.2703 3.99264ZM10.968 4.83905C11.4643 4.11284 12.5356 4.11283 13.032 4.83905L13.4639 5.471C16.1165 9.35201 18.3955 13.4755 20.2705 17.7864L20.3607 17.9938C20.6321 18.6178 20.222 19.3264 19.5458 19.402C14.5309 19.9625 9.46911 19.9625 4.4542 19.402C3.77791 19.3264 3.36785 18.6178 3.63927 17.9938L3.72948 17.7864C5.60443 13.4756 7.88348 9.35201 10.5361 5.47099L10.968 4.83905Z" fill="#FFC01E"/>
</svg>
`}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="103:135"
                        style={{"marginLeft":288,"marginRight":13,"flexGrow":1,"marginTop":17,"marginBottom":39}}
                        className="innerDiv"
                      >
                        <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6141 2.89139C12.4969 2.77418 12.3379 2.70833 12.1721 2.70833C12.0064 2.70833 11.8474 2.77418 11.7302 2.89139L4.06988 10.5517C3.99136 10.6302 3.93517 10.7283 3.90711 10.8357L3.07378 14.0261C3.0177 14.2407 3.07965 14.4691 3.23655 14.626C3.39344 14.7828 3.62176 14.8448 3.83644 14.7887L7.0268 13.9554C7.13424 13.9273 7.23226 13.8711 7.31079 13.7926L14.9711 6.1323C15.2152 5.88822 15.2152 5.49249 14.9711 5.24841L12.6141 2.89139ZM5.07368 11.3157L12.1721 4.21722L13.6453 5.69035L6.54681 12.7888L4.55284 13.3097L5.07368 11.3157Z" fill="white"/>
<path d="M3.33331 16.0417C2.98814 16.0417 2.70831 16.3215 2.70831 16.6667C2.70831 17.0118 2.98814 17.2917 3.33331 17.2917H15.8333C16.1785 17.2917 16.4583 17.0118 16.4583 16.6667C16.4583 16.3215 16.1785 16.0417 15.8333 16.0417H3.33331Z" fill="white"/>
</svg>
`}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="184:1184"
                  style={{"width":"97.52345114761258%","marginLeft":"1.2422360248447204%","height":"0%","top":"-7.106598984771574%"}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="77:178"
            style={{"width":"5.333333333333333%","marginLeft":"18.133333333333333%","height":"1.51285930408472%","top":"38.12405446293495%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83949 10C5.83949 9.65482 6.11931 9.375 6.46449 9.375H9.375V6.46446C9.375 6.11928 9.65482 5.83946 10 5.83946C10.3452 5.83946 10.625 6.11928 10.625 6.46446V9.375H13.5356C13.8807 9.375 14.1606 9.65482 14.1606 10C14.1606 10.3452 13.8807 10.625 13.5356 10.625H10.625V13.5355C10.625 13.8807 10.3452 14.1605 10 14.1605C9.65482 14.1605 9.375 13.8807 9.375 13.5355V10.625H6.46449C6.11931 10.625 5.83949 10.3452 5.83949 10Z" fill="#E87121"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.09728 3.14063C8.67024 2.85307 11.3297 2.85307 13.9027 3.14063C15.4247 3.31074 16.6538 4.5096 16.8328 6.04041C17.1405 8.67117 17.1405 11.3288 16.8328 13.9596C16.6538 15.4904 15.4247 16.6893 13.9027 16.8594C11.3297 17.1469 8.67024 17.1469 6.09728 16.8594C4.57529 16.6893 3.34621 15.4904 3.16717 13.9596C2.85948 11.3288 2.85948 8.67117 3.16717 6.04041C3.34621 4.5096 4.57529 3.31074 6.09728 3.14063ZM13.7639 4.3829C11.2832 4.10564 8.71681 4.10564 6.23612 4.3829C5.28243 4.48949 4.51905 5.24219 4.40871 6.18562C4.1123 8.7199 4.1123 11.2801 4.40871 13.8144C4.51905 14.7578 5.28243 15.5105 6.23612 15.6171C8.71681 15.8944 11.2832 15.8944 13.7639 15.6171C14.7175 15.5105 15.4809 14.7578 15.5913 13.8144C15.8877 11.2801 15.8877 8.71991 15.5913 6.18562C15.4809 5.24219 14.7175 4.48949 13.7639 4.3829Z" fill="#E87121"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv centerer">
          <div
            id="77:180"
            style={{"width":"5.333333333333333%","marginLeft":"47.733333333333334%","height":"1.51285930408472%","top":"38.12405446293495%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66856 15.53C9.7752 15.594 9.8892 15.6223 9.99999 15.6209C10.1108 15.6223 10.2248 15.594 10.3314 15.53L11.2775 14.9624C13.1329 13.8491 15.4021 13.6673 17.4111 14.4709C18.1522 14.7674 18.9583 14.2216 18.9583 13.4234V3.70763C18.9583 3.22601 18.6651 2.7929 18.2179 2.61403C15.6303 1.579 12.7077 1.81319 10.3179 3.24704L9.99999 3.4378L9.68205 3.24704C7.2923 1.81319 4.36963 1.579 1.78206 2.61403C1.33488 2.7929 1.04166 3.22601 1.04166 3.70763V13.4234C1.04166 14.2216 1.84782 14.7674 2.58892 14.4709C4.59792 13.6673 6.86709 13.8491 8.7225 14.9624L9.66856 15.53ZM2.29166 3.75665V13.2456C4.62148 12.3723 7.22648 12.607 9.36562 13.8905L9.37499 13.8961V4.52054L9.03893 4.3189C6.99811 3.09441 4.50527 2.88746 2.29166 3.75665ZM10.6344 13.8905L10.625 13.8961V4.52054L10.9611 4.3189C13.0019 3.09441 15.4947 2.88746 17.7083 3.75665V13.2456C15.3785 12.3723 12.7735 12.607 10.6344 13.8905Z" fill="#E87121"/>
<path d="M7.72929 15.8685C6.04274 14.8847 3.95724 14.8847 2.27069 15.8685L2.18507 15.9185C1.88691 16.0924 1.7862 16.4751 1.96013 16.7733C2.13405 17.0714 2.51675 17.1721 2.81491 16.9982L2.90053 16.9483C4.19787 16.1915 5.80211 16.1915 7.09945 16.9483L8.0055 17.4768C9.23798 18.1957 10.762 18.1957 11.9945 17.4768L12.9005 16.9483C14.1979 16.1915 15.8021 16.1915 17.0995 16.9483L17.1851 16.9982C17.4832 17.1721 17.8659 17.0714 18.0399 16.7733C18.2138 16.4751 18.1131 16.0924 17.8149 15.9185L17.7293 15.8685C16.0427 14.8847 13.9572 14.8847 12.2707 15.8685L11.3646 16.3971C10.5214 16.889 9.47861 16.889 8.63534 16.3971L7.72929 15.8685Z" fill="#E87121"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv centerer">
          <div
            id="77:182"
            style={{"width":"6.4%","marginLeft":"76%","height":"1.8154311649016641%","top":"37.89712556732224%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1369 3.46967C14.9963 3.32902 14.8055 3.25 14.6066 3.25C14.4077 3.25 14.2169 3.32902 14.0763 3.46967L4.88388 12.6621C4.78965 12.7563 4.72223 12.8739 4.68856 13.0028L3.68856 16.8313C3.62127 17.0889 3.69561 17.3629 3.88388 17.5511C4.07215 17.7394 4.34614 17.8138 4.60375 17.7465L8.43218 16.7465C8.56111 16.7128 8.67874 16.6454 8.77297 16.5511L17.9654 7.35876C18.2582 7.06586 18.2582 6.59099 17.9654 6.2981L15.1369 3.46967ZM6.08843 13.5788L14.6066 5.06066L16.3744 6.82843L7.8562 15.3466L5.46344 15.9716L6.08843 13.5788Z" fill="#E87121"/>
<path d="M4 19.25C3.58579 19.25 3.25 19.5858 3.25 20C3.25 20.4142 3.58579 20.75 4 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20C19.75 19.5858 19.4142 19.25 19 19.25H4Z" fill="#E87121"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv centerer">
          <div
            id="77:184"
            style={{"width":"5.333333333333333%","marginLeft":"18.133333333333333%","height":"1.51285930408472%","top":"43.41906202723147%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33332 1.875C7.98815 1.875 7.70832 2.15482 7.70832 2.5V3.125H4.16666C3.82148 3.125 3.54166 3.40482 3.54166 3.75C3.54166 4.09518 3.82148 4.375 4.16666 4.375H15.8333C16.1785 4.375 16.4583 4.09518 16.4583 3.75C16.4583 3.40482 16.1785 3.125 15.8333 3.125H12.2917V2.5C12.2917 2.15482 12.0118 1.875 11.6667 1.875H8.33332Z" fill="#E87121"/>
<path d="M8.33332 8.875C8.6785 8.875 8.95832 9.15482 8.95832 9.5L8.95832 15.3333C8.95832 15.6785 8.6785 15.9583 8.33332 15.9583C7.98815 15.9583 7.70832 15.6785 7.70832 15.3333V9.5C7.70832 9.15482 7.98815 8.875 8.33332 8.875Z" fill="#E87121"/>
<path d="M12.2917 9.5C12.2917 9.15482 12.0118 8.875 11.6667 8.875C11.3215 8.875 11.0417 9.15482 11.0417 9.5V15.3333C11.0417 15.6785 11.3215 15.9583 11.6667 15.9583C12.0118 15.9583 12.2917 15.6785 12.2917 15.3333V9.5Z" fill="#E87121"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.99284 6.59765C5.02801 6.28113 5.29555 6.04167 5.61402 6.04167H14.386C14.7044 6.04167 14.972 6.28113 15.0071 6.59765L15.1739 8.09877C15.4763 10.8199 15.4763 13.5661 15.1739 16.2872L15.1575 16.435C15.0375 17.5151 14.2004 18.3764 13.1241 18.5271C11.0515 18.8172 8.94851 18.8172 6.87589 18.5271C5.79961 18.3764 4.96249 17.5151 4.84247 16.435L4.82605 16.2872C4.52371 13.5661 4.52371 10.8199 4.82605 8.09877L4.99284 6.59765ZM6.17342 7.29167L6.06841 8.23681C5.77626 10.8662 5.77626 13.5198 6.06841 16.1492L6.08483 16.2969C6.14175 16.8092 6.53876 17.2177 7.0492 17.2891C9.00684 17.5632 10.9931 17.5632 12.9508 17.2891C13.4612 17.2177 13.8582 16.8092 13.9151 16.2969L13.9316 16.1492C14.2237 13.5198 14.2237 10.8662 13.9316 8.23681L13.8266 7.29167H6.17342Z" fill="#E87121"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv centerer">
          <div
            id="77:186"
            style={{"width":"5.098038736979166%","marginLeft":"48%","height":"1.51285930408472%","top":"43.4947049924357%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.637 7.29167H3.18626C2.85631 7.29167 2.58884 7.01184 2.58884 6.66667C2.58884 6.32149 2.85631 6.04167 3.18626 6.04167H10.637C10.897 5.07979 11.7424 4.375 12.7451 4.375C13.7478 4.375 14.5931 5.07979 14.8532 6.04167H15.9314C16.2613 6.04167 16.5288 6.32149 16.5288 6.66667C16.5288 7.01184 16.2613 7.29167 15.9314 7.29167H14.8532C14.5931 8.25354 13.7478 8.95833 12.7451 8.95833C11.7424 8.95833 10.897 8.25354 10.637 7.29167ZM11.7494 6.66667C11.7494 6.09137 12.1952 5.625 12.7451 5.625C13.295 5.625 13.7408 6.09137 13.7408 6.66667C13.7408 7.24196 13.295 7.70833 12.7451 7.70833C12.1952 7.70833 11.7494 7.24196 11.7494 6.66667Z" fill="#E87121"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.48064 13.9583H15.9314C16.2613 13.9583 16.5288 13.6785 16.5288 13.3333C16.5288 12.9882 16.2613 12.7083 15.9314 12.7083H8.48064C8.22059 11.7465 7.37524 11.0417 6.37254 11.0417C5.36984 11.0417 4.52448 11.7465 4.26443 12.7083H3.18626C2.85631 12.7083 2.58884 12.9882 2.58884 13.3333C2.58884 13.6785 2.85631 13.9583 3.18626 13.9583H4.26443C4.52448 14.9202 5.36984 15.625 6.37254 15.625C7.37524 15.625 8.22059 14.9202 8.48064 13.9583ZM5.37683 13.3333C5.37683 12.758 5.82262 12.2917 6.37254 12.2917C6.92245 12.2917 7.36825 12.758 7.36825 13.3333C7.36825 13.9086 6.92245 14.375 6.37254 14.375C5.82262 14.375 5.37683 13.9086 5.37683 13.3333Z" fill="#E87121"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":15}} className="outerDiv centerer">
          <div
            id="96:123"
            style={{"width":"5.333333333333333%","marginLeft":"76.26666666666667%","height":"1.51285930408472%","top":"43.41906202723147%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0417 3.55242L13.7195 3.63683C15.284 3.83167 16.4583 5.16133 16.4583 6.73787V15.4791C16.4583 17.0098 15.3181 18.3008 13.7991 18.49C11.2761 18.8042 8.72388 18.8042 6.20088 18.49C4.68187 18.3008 3.54166 17.0098 3.54166 15.4791V6.73787C3.54166 5.16133 4.71599 3.83167 6.28045 3.63683L6.95824 3.55242C7.22673 2.58505 8.11377 1.875 9.16666 1.875H10.8333C11.8862 1.875 12.7733 2.58505 13.0417 3.55242ZM6.87499 4.82244L6.43493 4.87725C5.49625 4.99415 4.79166 5.79195 4.79166 6.73787V15.4791C4.79166 16.3792 5.46214 17.1384 6.35537 17.2496C8.77577 17.551 11.2242 17.551 13.6446 17.2496C14.5378 17.1384 15.2083 16.3792 15.2083 15.4791V6.73787C15.2083 5.79195 14.5037 4.99415 13.5651 4.87725L13.125 4.82244V5.83333C13.125 6.17851 12.8452 6.45833 12.5 6.45833H7.49999C7.15481 6.45833 6.87499 6.17851 6.87499 5.83333V4.82244ZM8.12499 4.16667C8.12499 3.59137 8.59136 3.125 9.16666 3.125H10.8333C11.4086 3.125 11.875 3.59137 11.875 4.16667V5.20833H8.12499V4.16667Z" fill="#E87121"/>
<path d="M13.125 9.79167C13.125 9.44649 12.8452 9.16667 12.5 9.16667H7.49999C7.15481 9.16667 6.87499 9.44649 6.87499 9.79167C6.87499 10.1368 7.15481 10.4167 7.49999 10.4167H12.5C12.8452 10.4167 13.125 10.1368 13.125 9.79167Z" fill="#E87121"/>
<path d="M12.2917 12.2917C12.2917 11.9465 12.0118 11.6667 11.6667 11.6667H7.49999C7.15481 11.6667 6.87499 11.9465 6.87499 12.2917C6.87499 12.6368 7.15481 12.9167 7.49999 12.9167H11.6667C12.0118 12.9167 12.2917 12.6368 12.2917 12.2917Z" fill="#E87121"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":21}} className="outerDiv centerer">
          <div
            id="154:1247"
            style={{"width":"6.4%","marginLeft":"81.86666666666666%","height":"1.8154311649016641%","top":"4.16036308623298%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3851 15.4457C11.7348 17.5684 7.85538 17.4013 5.3986 14.9445C2.76256 12.3085 2.76256 8.03464 5.3986 5.3986C8.03464 2.76256 12.3085 2.76256 14.9445 5.3986C17.4013 7.85538 17.5684 11.7348 15.4457 14.3851L20.6014 19.5407C20.8943 19.8336 20.8943 20.3085 20.6014 20.6014C20.3085 20.8943 19.8336 20.8943 19.5407 20.6014L14.3851 15.4457ZM6.45926 13.8839C4.40901 11.8336 4.40901 8.50951 6.45926 6.45926C8.50951 4.40901 11.8336 4.40901 13.8839 6.45926C15.9326 8.50801 15.9341 11.8287 13.8884 13.8794C13.8869 13.8809 13.8854 13.8823 13.8839 13.8839C13.8824 13.8854 13.8809 13.8869 13.8794 13.8884C11.8288 15.9341 8.50801 15.9326 6.45926 13.8839Z" fill="#E87121"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":22}} className="outerDiv centerer">
          <div
            id="11:44"
            style={{"width":"12%","marginLeft":"5.066666666666666%","height":"3.40393343419062%","top":"3.40393343419062%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.0312 22.5C37.0312 21.7233 36.4016 21.0938 35.625 21.0938H9.375C8.59835 21.0938 7.96875 21.7233 7.96875 22.5C7.96875 23.2767 8.59835 23.9062 9.375 23.9062H35.625C36.4016 23.9062 37.0312 23.2767 37.0312 22.5Z" fill="#E87121"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.0312 13.125C37.0312 12.3483 36.4016 11.7188 35.625 11.7188H9.375C8.59835 11.7188 7.96875 12.3483 7.96875 13.125C7.96875 13.9017 8.59835 14.5312 9.375 14.5312H35.625C36.4016 14.5312 37.0312 13.9017 37.0312 13.125Z" fill="#E87121"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.0312 31.875C37.0312 31.0983 36.4016 30.4688 35.625 30.4688H9.375C8.59835 30.4688 7.96875 31.0983 7.96875 31.875C7.96875 32.6517 8.59835 33.2812 9.375 33.2812H35.625C36.4016 33.2812 37.0312 32.6517 37.0312 31.875Z" fill="#E87121"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CLoadingScreen11D95 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="23:39"
            style={{"marginLeft":-12,"width":400,"minWidth":400,"height":null,"marginTop":189,"marginBottom":223,"minHeight":400,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I23:39;44:49"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/455a/c320/35f0178ad5672a0487965663f820dd23)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="99:143"
            style={{"marginLeft":101,"width":175,"minWidth":175,"height":null,"marginTop":-359,"marginBottom":353,"minHeight":6,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I99:143;59:20"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I99:143;61:15"
                  style={{"marginLeft":0,"marginRight":166.25,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CSettingsPage39D39 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="39:44"
            style={{"marginLeft":84,"width":213,"minWidth":213,"height":null,"marginTop":28,"marginBottom":688,"minHeight":96,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I39:44;41:16"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/32bb/9945/177cf8287d1fb86a2655a749aae430a1)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="39:58"
            style={{"marginLeft":-12,"width":195,"minWidth":195,"height":null,"marginTop":-665,"marginBottom":610,"minHeight":55,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"142.22222328186035%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Hi, NAME</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="39:59"
            style={{"marginLeft":31,"width":314.0255126953125,"minWidth":314.0255126953125,"marginTop":-597,"marginBottom":597,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="39:60"
            style={{"marginLeft":31,"width":163,"minWidth":163,"height":null,"marginTop":-485,"marginBottom":463,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"142.22222328186035%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Push Notifications</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="42:68"
            style={{"marginLeft":277,"width":44,"minWidth":44,"height":null,"marginTop":-485,"marginBottom":462,"minHeight":23,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I42:68;46:58"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I42:68;46:59"
                  style={{"marginLeft":1.15789794921875,"marginRight":22,"flexGrow":1,"marginTop":1.1500244140625,"marginBottom":1.14996337890625}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="10.5" cy="10.4284" rx="10.5" ry="10.4284" fill="white"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="77:158"
            style={{"marginLeft":63,"width":163,"minWidth":163,"height":null,"marginTop":-442,"marginBottom":420,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"142.22222328186035%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Shopping Time</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="77:160"
            style={{"marginLeft":277,"width":28.6956787109375,"minWidth":28.6956787109375,"height":null,"marginTop":-440,"marginBottom":425,"minHeight":15,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I77:160;46:58"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I77:160;46:59"
                  style={{"marginLeft":0.755126953125,"marginRight":14.347900390625,"flexGrow":1,"marginTop":0.75,"marginBottom":0.75}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="7.00001" cy="6.95229" rx="7.00001" ry="6.95229" fill="white"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="77:159"
            style={{"marginLeft":63,"width":163,"minWidth":163,"height":null,"marginTop":-407,"marginBottom":385,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"142.22222328186035%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Fridge Clean-out</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":9}} className="outerDiv">
          <div
            id="77:163"
            style={{"marginLeft":277,"width":28.6956787109375,"minWidth":28.6956787109375,"height":null,"marginTop":-405,"marginBottom":390,"minHeight":15,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I77:163;46:58"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I77:163;46:59"
                  style={{"marginLeft":0.755126953125,"marginRight":14.347900390625,"flexGrow":1,"marginTop":0.75,"marginBottom":0.75}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="7.00001" cy="6.95229" rx="7.00001" ry="6.95229" fill="white"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="39:56"
            style={{"width":"14.666666666666666%","marginLeft":"5.866666666666666%","height":"6.773399014778325%","top":"5.911330049261084%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5001 11.0626C28.9843 11.0626 30.1876 12.2658 30.1876 13.7501C30.1876 15.2343 28.9843 16.4376 27.5001 16.4376C26.0158 16.4376 24.8126 15.2343 24.8126 13.7501C24.8126 12.2658 26.0158 11.0626 27.5001 11.0626ZM27.5001 24.8126C28.9843 24.8126 30.1876 26.0158 30.1876 27.5001C30.1876 28.9843 28.9843 30.1876 27.5001 30.1876C26.0158 30.1876 24.8126 28.9843 24.8126 27.5001C24.8126 26.0158 26.0158 24.8126 27.5001 24.8126ZM27.5001 38.5626C28.9843 38.5626 30.1876 39.7658 30.1876 41.2501C30.1876 42.7343 28.9843 43.9376 27.5001 43.9376C26.0158 43.9376 24.8126 42.7343 24.8126 41.2501C24.8126 39.7658 26.0158 38.5626 27.5001 38.5626Z" fill="black" stroke="black" stroke-width="1.5"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CSearchBar154D1269 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:1269;154:1089"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"1px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:1269;154:1087"
            style={{"marginLeft":13,"marginRight":263,"flexGrow":1,"marginTop":3,"marginBottom":3}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3851 15.4457C11.7348 17.5684 7.85535 17.4013 5.39857 14.9445C2.76253 12.3085 2.76253 8.03464 5.39857 5.3986C8.03461 2.76256 12.3085 2.76256 14.9445 5.3986C17.4013 7.85538 17.5684 11.7348 15.4457 14.3851L20.6013 19.5407C20.8942 19.8336 20.8942 20.3085 20.6013 20.6014C20.3085 20.8943 19.8336 20.8943 19.5407 20.6014L14.3851 15.4457ZM6.45923 13.8839C4.40898 11.8336 4.40898 8.50951 6.45923 6.45926C8.50948 4.40901 11.8336 4.40901 13.8839 6.45926C15.9326 8.50801 15.9341 11.8287 13.8884 13.8794C13.8868 13.8809 13.8853 13.8823 13.8838 13.8839C13.8823 13.8854 13.8808 13.8869 13.8793 13.8884C11.8287 15.9341 8.50798 15.9326 6.45923 13.8839Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CInventoryEntry154D1273 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:1273;154:1035"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:1273;154:1036"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/c796/62d0/f64c499e7a7a6c64724c3b5f5e5669f5)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I154:1273;154:1037"
            style={{"marginLeft":115,"marginRight":39,"flexGrow":1,"marginTop":6,"marginBottom":67,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Gold Medal All Purpose Flour</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I154:1273;154:1040"
            style={{"marginLeft":225,"marginRight":28,"flexGrow":1,"marginTop":37,"marginBottom":17,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="10">12/13/2021</span>
              <br key="br10" />
              <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="14">200</span>
              <span style={{}} key="20">/4536g</span>
              <br key="br20" />
              <span style={{}} key="end">1 -  10lb container</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="I154:1273;154:1038"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":53,"marginBottom":29,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="8">Best By:</span>
              <br key="br8" />
              <span style={{}} key="15">Grams:</span>
              <br key="br15" />
              <span style={{}} key="end">Quantity: </span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv centerer">
          <div
            id="I154:1273;154:1041"
            style={{"marginLeft":309,"marginRight":17,"flexGrow":1,"marginTop":10,"marginBottom":74}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 8.99999C13 9.55227 12.5523 9.99999 12 9.99999C11.4477 9.99999 11 9.55227 11 8.99999C11 8.4477 11.4477 7.99999 12 7.99999C12.5523 7.99999 13 8.4477 13 8.99999Z" fill="#FFC01E"/>
<path d="M12 11.75C12.4142 11.75 12.75 12.0858 12.75 12.5V17.5C12.75 17.9142 12.4142 18.25 12 18.25C11.5858 18.25 11.25 17.9142 11.25 17.5V12.5C11.25 12.0858 11.5858 11.75 12 11.75Z" fill="#FFC01E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2703 3.99262C13.1784 2.39496 10.8216 2.39495 9.72961 3.99262L9.29769 4.62457C6.59165 8.58378 4.26669 12.7904 2.35396 17.1881L2.26374 17.3955C1.58969 18.9453 2.60805 20.705 4.2876 20.8927C9.41323 21.4656 14.5867 21.4656 19.7124 20.8927C21.3919 20.705 22.4103 18.9453 21.7362 17.3955L21.646 17.1881C19.7333 12.7904 17.4083 8.58379 14.7023 4.62457L14.2703 3.99262ZM10.968 4.83903C11.4643 4.11282 12.5356 4.11282 13.032 4.83903L13.4639 5.47098C16.1165 9.352 18.3955 13.4755 20.2705 17.7863L20.3607 17.9938C20.6321 18.6178 20.222 19.3264 19.5458 19.402C14.5309 19.9625 9.46911 19.9625 4.4542 19.402C3.77791 19.3264 3.36785 18.6178 3.63927 17.9938L3.72948 17.7863C5.60443 13.4755 7.88348 9.35199 10.5361 5.47098L10.968 4.83903Z" fill="#FFC01E"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class COrderTakeout154D1281 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:1281;154:913"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:1281;154:914"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/c6e6/bb7d/930a7897f39a3084e7304ab0e65dadd6)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I154:1281;154:915"
            style={{"marginLeft":115,"marginRight":77,"flexGrow":1,"marginTop":13,"marginBottom":60,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Chick-fil-a</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I154:1281;154:916"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":58,"marginBottom":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">My Order: Spicy Chicken Sandwich, no pickles, medium fry, medium sunjoy extra ice</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CSearchPage154D1250 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="154:1251"
            style={{"marginLeft":84,"width":213,"minWidth":213,"height":null,"marginTop":28,"marginBottom":688,"minHeight":96,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:1251;41:16"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/32bb/9945/177cf8287d1fb86a2655a749aae430a1)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="154:1269"
            style={{"marginLeft":38,"width":300,"minWidth":300,"height":null,"marginTop":-679,"marginBottom":649,"minHeight":30,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CSearchBar {...this.props} nodeId="154:1269" />
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="154:1290"
            style={{"marginLeft":182,"width":200,"minWidth":200,"height":null,"marginTop":-613,"marginBottom":607,"minHeight":6,"color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"196.9230842590332%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">3 of 29384 results</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="154:1254"
            style={{"marginLeft":31,"width":314.0255126953125,"minWidth":314.0255126953125,"marginTop":-584,"marginBottom":584,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="184:1309"
            style={{"marginLeft":13,"width":350,"minWidth":350,"height":null,"marginTop":-566,"marginBottom":-200,"minHeight":766,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv">
                <div
                  id="154:1273"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":0,"marginBottom":658,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <CInventoryEntry {...this.props} nodeId="154:1273" />
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="154:1281"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-640,"marginBottom":532,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <COrderTakeout {...this.props} nodeId="154:1281" />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv">
                <div
                  id="154:1286"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-514,"marginBottom":399,"minHeight":115,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:1286;75:163"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/47ad/3605/b9ae6ee7c0a3bfa664a26610402a28b6)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I154:1286;75:164"
                        style={{"marginLeft":0,"marginRight":198.4755859375,"flexGrow":1,"marginTop":91,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.6700000166893005,"borderRadius":"0px 5px 0px 5px"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":2}} className="outerDiv centerer">
                      <div
                        id="I154:1286;75:166"
                        style={{"marginLeft":33.94512939453125,"marginRight":235.05487060546875,"flexGrow":1,"marginTop":91,"marginBottom":0,"color":"rgba(255, 255, 255, 1)","WebkitTextStroke":"1px rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"196.9230842590332%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Veggie Burger</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv">
                <div
                  id="184:1328"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-381,"marginBottom":266,"minHeight":115,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I184:1328;75:163"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/47ad/3605/b9ae6ee7c0a3bfa664a26610402a28b6)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I184:1328;75:164"
                        style={{"marginLeft":0,"marginRight":198.4755859375,"flexGrow":1,"marginTop":91,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.6700000166893005,"borderRadius":"0px 5px 0px 5px"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":2}} className="outerDiv centerer">
                      <div
                        id="I184:1328;75:166"
                        style={{"marginLeft":33.94512939453125,"marginRight":235.05487060546875,"flexGrow":1,"marginTop":91,"marginBottom":0,"color":"rgba(255, 255, 255, 1)","WebkitTextStroke":"1px rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"196.9230842590332%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Veggie Burger</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":4}} className="outerDiv">
                <div
                  id="184:1332"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-248,"marginBottom":133,"minHeight":115,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I184:1332;75:163"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/47ad/3605/b9ae6ee7c0a3bfa664a26610402a28b6)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I184:1332;75:164"
                        style={{"marginLeft":0,"marginRight":198.4755859375,"flexGrow":1,"marginTop":91,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.6700000166893005,"borderRadius":"0px 5px 0px 5px"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":2}} className="outerDiv centerer">
                      <div
                        id="I184:1332;75:166"
                        style={{"marginLeft":33.94512939453125,"marginRight":235.05487060546875,"flexGrow":1,"marginTop":91,"marginBottom":0,"color":"rgba(255, 255, 255, 1)","WebkitTextStroke":"1px rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"196.9230842590332%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Veggie Burger</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":5}} className="outerDiv">
                <div
                  id="184:1336"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-115,"marginBottom":0,"minHeight":115,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I184:1336;75:163"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/47ad/3605/b9ae6ee7c0a3bfa664a26610402a28b6)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I184:1336;75:164"
                        style={{"marginLeft":0,"marginRight":198.4755859375,"flexGrow":1,"marginTop":91,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.6700000166893005,"borderRadius":"0px 5px 0px 5px"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":2}} className="outerDiv centerer">
                      <div
                        id="I184:1336;75:166"
                        style={{"marginLeft":33.94512939453125,"marginRight":235.05487060546875,"flexGrow":1,"marginTop":91,"marginBottom":0,"color":"rgba(255, 255, 255, 1)","WebkitTextStroke":"1px rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"196.9230842590332%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Veggie Burger</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="154:1252"
            style={{"width":"14.666666666666666%","marginLeft":"5.866666666666666%","height":"6.773399014778325%","top":"5.911330049261084%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 11.0626C28.9843 11.0626 30.1875 12.2658 30.1875 13.7501C30.1875 15.2343 28.9843 16.4376 27.5 16.4376C26.0158 16.4376 24.8125 15.2343 24.8125 13.7501C24.8125 12.2658 26.0158 11.0626 27.5 11.0626ZM27.5 24.8126C28.9843 24.8126 30.1875 26.0158 30.1875 27.5001C30.1875 28.9843 28.9843 30.1876 27.5 30.1876C26.0158 30.1876 24.8125 28.9843 24.8125 27.5001C24.8125 26.0158 26.0158 24.8126 27.5 24.8126ZM27.5 38.5626C28.9843 38.5626 30.1875 39.7658 30.1875 41.2501C30.1875 42.7343 28.9843 43.9376 27.5 43.9376C26.0158 43.9376 24.8125 42.7343 24.8125 41.2501C24.8125 39.7658 26.0158 38.5626 27.5 38.5626Z" fill="black" stroke="black" stroke-width="1.5"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv centerer">
          <div
            id="154:1291"
            style={{"width":"6.4%","marginLeft":"15.733333333333333%","height":"2.955665024630542%","top":"23.76847290640394%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4697 7.53033C13.7626 7.82322 14.2374 7.82322 14.5303 7.53033L15.25 6.81066L15.25 17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17L16.75 6.81066L17.4697 7.53033C17.7626 7.82322 18.2374 7.82322 18.5303 7.53033C18.8232 7.23744 18.8232 6.76256 18.5303 6.46967L16.5303 4.46967C16.2374 4.17678 15.7626 4.17678 15.4697 4.46967L13.4697 6.46967C13.1768 6.76256 13.1768 7.23744 13.4697 7.53033Z" fill="#C4C4C4"/>
<path d="M8.75 17.1893L9.46967 16.4697C9.76256 16.1768 10.2374 16.1768 10.5303 16.4697C10.8232 16.7626 10.8232 17.2374 10.5303 17.5303L8.53033 19.5303C8.23744 19.8232 7.76256 19.8232 7.46967 19.5303L5.46967 17.5303C5.17678 17.2374 5.17678 16.7626 5.46967 16.4697C5.76256 16.1768 6.23744 16.1768 6.53033 16.4697L7.25 17.1893L7.25 7C7.25 6.58579 7.58579 6.25 8 6.25C8.41421 6.25 8.75 6.58579 8.75 7L8.75 17.1893Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv centerer">
          <div
            id="154:1292"
            style={{"width":"6.4%","marginLeft":"10.4%","height":"2.955665024630542%","top":"23.76847290640394%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9858 5.42367C14.0077 4.97906 9.99234 4.97906 6.01418 5.42367C5.74501 5.45376 5.61538 5.76941 5.78573 5.97998L9.30275 10.3275C10.5626 11.8849 11.25 13.8275 11.25 15.8307V18.7199L12.75 19.8199V15.8307C12.75 13.8275 13.4374 11.8849 14.6973 10.3275L18.2143 5.97998C18.3846 5.76941 18.255 5.45376 17.9858 5.42367ZM5.84757 3.93296C9.93646 3.47596 14.0635 3.47596 18.1524 3.93296C19.5994 4.09467 20.2962 5.79146 19.3805 6.92339L15.8634 11.2709C14.8195 12.5614 14.25 14.1709 14.25 15.8307V21.3C14.25 21.5826 14.0911 21.8413 13.839 21.969C13.5869 22.0968 13.2844 22.0719 13.0565 21.9048L10.0565 19.7048C9.86382 19.5635 9.75 19.3389 9.75 19.1V15.8307C9.75 14.1709 9.18048 12.5614 8.13656 11.2709L4.61954 6.92339C3.70385 5.79146 4.40064 4.09467 5.84757 3.93296Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CSearchBar154D1299 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:1299;154:1089"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"1px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:1299;154:1087"
            style={{"marginLeft":13,"marginRight":263,"flexGrow":1,"marginTop":3,"marginBottom":3}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3851 15.4457C11.7348 17.5684 7.85537 17.4013 5.39858 14.9445C2.76254 12.3085 2.76254 8.03464 5.39858 5.3986C8.03462 2.76256 12.3085 2.76256 14.9445 5.3986C17.4013 7.85538 17.5684 11.7348 15.4457 14.3851L20.6014 19.5407C20.8943 19.8336 20.8943 20.3085 20.6014 20.6014C20.3085 20.8943 19.8336 20.8943 19.5407 20.6014L14.3851 15.4457ZM6.45924 13.8839C4.40899 11.8336 4.40899 8.50951 6.45924 6.45926C8.5095 4.40901 11.8336 4.40901 13.8839 6.45926C15.9326 8.50801 15.9341 11.8287 13.8884 13.8794C13.8869 13.8809 13.8854 13.8823 13.8838 13.8839C13.8823 13.8854 13.8808 13.8869 13.8794 13.8884C11.8287 15.9341 8.50799 15.9326 6.45924 13.8839Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CFilterPage154D1295 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="154:1296"
            style={{"marginLeft":84,"width":213,"minWidth":213,"height":null,"marginTop":28,"marginBottom":688,"minHeight":96,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:1296;41:16"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/32bb/9945/177cf8287d1fb86a2655a749aae430a1)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="154:1299"
            style={{"marginLeft":38,"width":300,"minWidth":300,"height":null,"marginTop":-686,"marginBottom":656,"minHeight":30,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CSearchBar {...this.props} nodeId="154:1299" />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="154:1298"
            style={{"marginLeft":31,"width":314.0254821777344,"minWidth":314.0254821777344,"marginTop":-616,"marginBottom":616,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="154:1327"
            style={{"marginLeft":24,"width":202,"minWidth":202,"height":null,"marginTop":-602,"marginBottom":575,"minHeight":27,"color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"196.9230842590332%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Search</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="154:1328"
            style={{"marginLeft":24,"width":202,"minWidth":202,"height":null,"marginTop":-567,"marginBottom":540,"minHeight":27,"color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"196.9230842590332%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Filter</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="154:1297"
            style={{"width":"14.666666666666666%","marginLeft":"5.866666666666666%","height":"6.773399014778325%","top":"5.911330049261084%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 11.0626C28.9843 11.0626 30.1875 12.2658 30.1875 13.7501C30.1875 15.2343 28.9843 16.4376 27.5 16.4376C26.0158 16.4376 24.8125 15.2343 24.8125 13.7501C24.8125 12.2658 26.0158 11.0626 27.5 11.0626ZM27.5 24.8126C28.9843 24.8126 30.1875 26.0158 30.1875 27.5001C30.1875 28.9843 28.9843 30.1876 27.5 30.1876C26.0158 30.1876 24.8125 28.9843 24.8125 27.5001C24.8125 26.0158 26.0158 24.8126 27.5 24.8126ZM27.5 38.5626C28.9843 38.5626 30.1875 39.7658 30.1875 41.2501C30.1875 42.7343 28.9843 43.9376 27.5 43.9376C26.0158 43.9376 24.8125 42.7343 24.8125 41.2501C24.8125 39.7658 26.0158 38.5626 27.5 38.5626Z" fill="black" stroke="black" stroke-width="1.5"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="154:1304"
            style={{"width":"6.4%","marginLeft":"9.866666666666667%","height":"2.955665024630542%","top":"20.19704433497537%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4697 7.53033C13.7626 7.82322 14.2374 7.82322 14.5303 7.53033L15.25 6.81066L15.25 17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17L16.75 6.81066L17.4697 7.53033C17.7626 7.82322 18.2374 7.82322 18.5303 7.53033C18.8232 7.23744 18.8232 6.76256 18.5303 6.46967L16.5303 4.46967C16.2374 4.17678 15.7626 4.17678 15.4697 4.46967L13.4697 6.46967C13.1768 6.76256 13.1768 7.23744 13.4697 7.53033Z" fill="#C4C4C4"/>
<path d="M8.75 17.1893L9.46967 16.4697C9.76256 16.1768 10.2374 16.1768 10.5303 16.4697C10.8232 16.7626 10.8232 17.2374 10.5303 17.5303L8.53033 19.5303C8.23744 19.8232 7.76256 19.8232 7.46967 19.5303L5.46967 17.5303C5.17678 17.2374 5.17678 16.7626 5.46967 16.4697C5.76256 16.1768 6.23744 16.1768 6.53033 16.4697L7.25 17.1893L7.25 7C7.25 6.58579 7.58579 6.25 8 6.25C8.41421 6.25 8.75 6.58579 8.75 7L8.75 17.1893Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv centerer">
          <div
            id="154:1305"
            style={{"width":"6.4%","marginLeft":"3.2%","height":"2.955665024630542%","top":"20.19704433497537%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9858 5.42367C14.0077 4.97906 9.99234 4.97906 6.01418 5.42367C5.74501 5.45376 5.61538 5.76941 5.78573 5.97998L9.30275 10.3275C10.5626 11.8849 11.25 13.8275 11.25 15.8307V18.7199L12.75 19.8199V15.8307C12.75 13.8275 13.4374 11.8849 14.6973 10.3275L18.2143 5.97998C18.3846 5.76941 18.255 5.45376 17.9858 5.42367ZM5.84757 3.93296C9.93646 3.47596 14.0635 3.47596 18.1524 3.93296C19.5994 4.09467 20.2962 5.79146 19.3805 6.92339L15.8634 11.2709C14.8195 12.5614 14.25 14.1709 14.25 15.8307V21.3C14.25 21.5826 14.0911 21.8413 13.839 21.969C13.5869 22.0968 13.2844 22.0719 13.0565 21.9048L10.0565 19.7048C9.86382 19.5635 9.75 19.3389 9.75 19.1V15.8307C9.75 14.1709 9.18048 12.5614 8.13656 11.2709L4.61954 6.92339C3.70385 5.79146 4.40064 4.09467 5.84757 3.93296Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CInventoryCheck42D78 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="49:140"
            style={{"marginLeft":101,"width":178,"minWidth":178,"height":null,"marginTop":-13,"marginBottom":647,"minHeight":178,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I49:140;44:50"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/523d/9d54/14d689c195210d72d7832f0be8c28f87)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="63:174"
            style={{"marginLeft":132,"width":145,"minWidth":145,"height":null,"marginTop":-672,"marginBottom":648,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"128.00000190734863%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Inventory Check</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="58:102"
            style={{"marginLeft":36,"width":313,"minWidth":313,"height":null,"marginTop":-626,"marginBottom":581,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I58:102;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I58:102;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I58:102;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I58:102;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.73681640625,"marginBottom":4.73687744140625,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I58:102;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.7952880859375,"flexGrow":1,"marginTop":10.39471435546875,"marginBottom":10.60528564453125,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Scan New Items</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="49:131"
            style={{"marginLeft":35,"width":314.0255126953125,"minWidth":314.0255126953125,"marginTop":-547,"marginBottom":547,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":10}} className="outerDiv">
          <div
            id="103:156"
            style={{"marginLeft":35,"width":144,"minWidth":144,"height":null,"marginTop":-489,"marginBottom":345,"minHeight":144,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I103:156;75:175"
                  style={{"marginLeft":12,"marginRight":11,"flexGrow":1,"marginTop":12,"marginBottom":11,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/eaa5/ce17/ef17b85638634f3de4c3f2b0805de89d)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I103:156;77:123"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(229, 229, 229, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I103:156;77:124"
                  style={{"marginLeft":37,"marginRight":36,"flexGrow":1,"marginTop":60,"marginBottom":60,"color":"rgba(255, 255, 255, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">dry goods</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":11}} className="outerDiv">
          <div
            id="103:160"
            style={{"marginLeft":200,"width":144,"minWidth":144,"height":null,"marginTop":-489,"marginBottom":345,"minHeight":144,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I103:160;75:175"
                  style={{"marginLeft":12,"marginRight":11,"flexGrow":1,"marginTop":12,"marginBottom":11,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/6642/a1cb/a3e97fa6d2ab7a9497d862fa0f4a0d7a)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I103:160;77:123"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(229, 229, 229, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I103:160;77:124"
                  style={{"marginLeft":30,"marginRight":29,"flexGrow":1,"marginTop":60,"marginBottom":60,"color":"rgba(255, 255, 255, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">condiments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":12}} className="outerDiv">
          <div
            id="103:164"
            style={{"marginLeft":35,"width":144,"minWidth":144,"height":null,"marginTop":-320,"marginBottom":176,"minHeight":144,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I103:164;75:175"
                  style={{"marginLeft":12,"marginRight":11,"flexGrow":1,"marginTop":12,"marginBottom":11,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/7367/c8c4/97cd2b0ef0e36049e4134b9b6ae72d0f)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I103:164;77:123"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(229, 229, 229, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I103:164;77:124"
                  style={{"marginLeft":46,"marginRight":46,"flexGrow":1,"marginTop":60,"marginBottom":60,"color":"rgba(255, 255, 255, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">freezer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":13}} className="outerDiv">
          <div
            id="103:168"
            style={{"marginLeft":200,"width":144,"minWidth":144,"height":null,"marginTop":-320,"marginBottom":176,"minHeight":144,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I103:168;75:175"
                  style={{"marginLeft":12,"marginRight":11,"flexGrow":1,"marginTop":12,"marginBottom":11,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/c670/4ebe/52869ac67c96c1e5c22bc9705da9a147)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I103:168;77:123"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(229, 229, 229, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I103:168;77:124"
                  style={{"marginLeft":30,"marginRight":30,"flexGrow":1,"marginTop":60,"marginBottom":60,"color":"rgba(255, 255, 255, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">refrigerator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="61:81"
            style={{"marginLeft":26,"width":313,"minWidth":313,"height":null,"marginTop":-135,"marginBottom":90,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I61:81;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I61:81;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I61:81;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I61:81;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.73681640625,"marginBottom":4.73681640625,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I61:81;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.7952880859375,"flexGrow":1,"marginTop":10.394775390625,"marginBottom":10.605224609375,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">View All</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="49:134"
            style={{"width":"14.666666666666666%","marginLeft":"5.866666666666666%","height":"6.773399014778325%","top":"5.41871921182266%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 27.5C45.2605 26.5507 44.4909 25.7812 43.5417 25.7812H11.4584C10.5091 25.7812 9.73962 26.5507 9.73962 27.5C9.73962 28.4492 10.5091 29.2187 11.4584 29.2187H43.5417C44.4909 29.2187 45.2605 28.4492 45.2605 27.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 16.0417C45.2605 15.0924 44.4909 14.3229 43.5417 14.3229H11.4584C10.5091 14.3229 9.73962 15.0924 9.73962 16.0417C9.73962 16.9909 10.5091 17.7604 11.4584 17.7604H43.5417C44.4909 17.7604 45.2605 16.9909 45.2605 16.0417Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 38.9583C45.2605 38.0091 44.4909 37.2396 43.5417 37.2396H11.4584C10.5091 37.2396 9.73962 38.0091 9.73962 38.9583C9.73962 39.9076 10.5091 40.6771 11.4584 40.6771H43.5417C44.4909 40.6771 45.2605 39.9076 45.2605 38.9583Z" fill="black"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="63:172"
            style={{"width":"6.4%","marginLeft":"26.4%","height":"2.955665024630542%","top":"17.364532019704434%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6023 18.636C11.7302 18.7128 11.8671 18.7468 12 18.7451C12.1329 18.7468 12.2698 18.7128 12.3977 18.636L13.533 17.9549C15.7595 16.619 18.4825 16.4008 20.8933 17.3651C21.7826 17.7208 22.75 17.0659 22.75 16.1081V4.44918C22.75 3.87123 22.3981 3.35151 21.8615 3.13686C18.7564 1.89483 15.2492 2.17585 12.3815 3.89647L12 4.12539L11.6185 3.89647C8.75077 2.17585 5.24357 1.89483 2.13848 3.13686C1.60187 3.35151 1.25 3.87123 1.25 4.44918V16.1081C1.25 17.0659 2.21739 17.7208 3.10672 17.3651C5.51752 16.4008 8.24052 16.619 10.467 17.9549L11.6023 18.636ZM2.75 4.50801V15.8948C5.54579 14.8468 8.67179 15.1285 11.2388 16.6686L11.25 16.6754V5.42467L10.8467 5.18271C8.39774 3.71332 5.40634 3.46498 2.75 4.50801ZM12.7612 16.6686L12.75 16.6754V5.42467L13.1533 5.18271C15.6023 3.71332 18.5937 3.46498 21.25 4.50801V15.8948C18.4542 14.8468 15.3282 15.1285 12.7612 16.6686Z" fill="black"/>
<path d="M9.27516 19.0423C7.2513 17.8617 4.7487 17.8617 2.72484 19.0423L2.6221 19.1022C2.26431 19.3109 2.14346 19.7701 2.35217 20.1279C2.56088 20.4857 3.02011 20.6066 3.3779 20.3979L3.48065 20.3379C5.03746 19.4298 6.96254 19.4298 8.51935 20.3379L9.60661 20.9722C11.0856 21.8349 12.9144 21.8349 14.3934 20.9722L15.4806 20.3379C17.0375 19.4298 18.9625 19.4298 20.5194 20.3379L20.6221 20.3979C20.9799 20.6066 21.4391 20.4857 21.6478 20.1279C21.8565 19.7701 21.7357 19.3109 21.3779 19.1022L21.2752 19.0423C19.2513 17.8617 16.7487 17.8617 14.7248 19.0423L13.6376 19.6765C12.6257 20.2668 11.3743 20.2668 10.3624 19.6765L9.27516 19.0423Z" fill="black"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CSearchBar154D1102 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:1102;154:1090"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"1px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:1102;154:1091"
            style={{"marginLeft":14,"marginRight":13,"flexGrow":1,"marginTop":3,"marginBottom":3}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.385 15.4457C11.7348 17.5684 7.85532 17.4013 5.39854 14.9445C2.7625 12.3085 2.7625 8.03464 5.39854 5.3986C8.03458 2.76256 12.3084 2.76256 14.9445 5.3986C17.4013 7.85538 17.5683 11.7348 15.4457 14.3851L20.6013 19.5407C20.8942 19.8336 20.8942 20.3085 20.6013 20.6014C20.3084 20.8943 19.8335 20.8943 19.5407 20.6014L14.385 15.4457ZM6.4592 13.8839C4.40895 11.8336 4.40895 8.50951 6.4592 6.45926C8.50945 4.40901 11.8336 4.40901 13.8838 6.45926C15.9326 8.50801 15.9341 11.8287 13.8883 13.8794C13.8868 13.8809 13.8853 13.8823 13.8838 13.8839C13.8823 13.8854 13.8808 13.8869 13.8793 13.8884C11.8287 15.9341 8.50795 15.9326 6.4592 13.8839Z" fill="#C4C4C4" fill-opacity="0.5"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CInventoryEntry154D1044 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:1044;154:1035"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:1044;154:1036"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/c796/62d0/f64c499e7a7a6c64724c3b5f5e5669f5)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I154:1044;154:1037"
            style={{"marginLeft":115,"marginRight":39,"flexGrow":1,"marginTop":6,"marginBottom":67,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Gold Medal All Purpose Flour</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I154:1044;154:1040"
            style={{"marginLeft":225,"marginRight":28,"flexGrow":1,"marginTop":37,"marginBottom":17,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="10">12/13/2021</span>
              <br key="br10" />
              <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="14">200</span>
              <span style={{}} key="20">/4536g</span>
              <br key="br20" />
              <span style={{}} key="end">1 -  10lb container</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="I154:1044;154:1038"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":53,"marginBottom":29,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="8">Best By:</span>
              <br key="br8" />
              <span style={{}} key="15">Grams:</span>
              <br key="br15" />
              <span style={{}} key="end">Quantity: </span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv centerer">
          <div
            id="I154:1044;154:1041"
            style={{"marginLeft":309,"marginRight":17,"flexGrow":1,"marginTop":10,"marginBottom":74}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0001 8.99999C13.0001 9.55227 12.5523 9.99999 12.0001 9.99999C11.4478 9.99999 11.0001 9.55227 11.0001 8.99999C11.0001 8.4477 11.4478 7.99999 12.0001 7.99999C12.5523 7.99999 13.0001 8.4477 13.0001 8.99999Z" fill="#FFC01E"/>
<path d="M12.0001 11.75C12.4143 11.75 12.7501 12.0858 12.7501 12.5V17.5C12.7501 17.9142 12.4143 18.25 12.0001 18.25C11.5858 18.25 11.2501 17.9142 11.2501 17.5V12.5C11.2501 12.0858 11.5858 11.75 12.0001 11.75Z" fill="#FFC01E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2704 3.99262C13.1784 2.39496 10.8216 2.39495 9.72967 3.99262L9.29775 4.62457C6.59171 8.58378 4.26675 12.7904 2.35402 17.1881L2.2638 17.3955C1.58975 18.9453 2.60811 20.705 4.28766 20.8927C9.41329 21.4656 14.5868 21.4656 19.7124 20.8927C21.392 20.705 22.4103 18.9453 21.7363 17.3955L21.6461 17.1881C19.7333 12.7904 17.4084 8.58379 14.7023 4.62457L14.2704 3.99262ZM10.9681 4.83903C11.4644 4.11282 12.5357 4.11282 13.032 4.83903L13.4639 5.47098C16.1165 9.352 18.3956 13.4755 20.2705 17.7863L20.3608 17.9938C20.6322 18.6178 20.2221 19.3264 19.5458 19.402C14.5309 19.9625 9.46917 19.9625 4.45427 19.402C3.77797 19.3264 3.36791 18.6178 3.63933 17.9938L3.72954 17.7863C5.6045 13.4755 7.88354 9.35199 10.5361 5.47098L10.9681 4.83903Z" fill="#FFC01E"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CInventoryEntry154D1052 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:1052;154:1035"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:1052;154:1036"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/c796/62d0/f64c499e7a7a6c64724c3b5f5e5669f5)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I154:1052;154:1037"
            style={{"marginLeft":115,"marginRight":39,"flexGrow":1,"marginTop":6,"marginBottom":67,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Gold Medal All Purpose Flour</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I154:1052;154:1040"
            style={{"marginLeft":225,"marginRight":28,"flexGrow":1,"marginTop":37,"marginBottom":17,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="10">12/13/2021</span>
              <br key="br10" />
              <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="14">200</span>
              <span style={{}} key="20">/4536g</span>
              <br key="br20" />
              <span style={{}} key="end">1 -  10lb container</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="I154:1052;154:1038"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":53,"marginBottom":29,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="8">Best By:</span>
              <br key="br8" />
              <span style={{}} key="15">Grams:</span>
              <br key="br15" />
              <span style={{}} key="end">Quantity: </span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv centerer">
          <div
            id="I154:1052;154:1041"
            style={{"marginLeft":309,"marginRight":17,"flexGrow":1,"marginTop":10,"marginBottom":74}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0001 8.99999C13.0001 9.55227 12.5523 9.99999 12.0001 9.99999C11.4478 9.99999 11.0001 9.55227 11.0001 8.99999C11.0001 8.4477 11.4478 7.99999 12.0001 7.99999C12.5523 7.99999 13.0001 8.4477 13.0001 8.99999Z" fill="#FFC01E"/>
<path d="M12.0001 11.75C12.4143 11.75 12.7501 12.0858 12.7501 12.5V17.5C12.7501 17.9142 12.4143 18.25 12.0001 18.25C11.5858 18.25 11.2501 17.9142 11.2501 17.5V12.5C11.2501 12.0858 11.5858 11.75 12.0001 11.75Z" fill="#FFC01E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2704 3.99262C13.1784 2.39496 10.8216 2.39495 9.72967 3.99262L9.29775 4.62457C6.59171 8.58378 4.26675 12.7904 2.35402 17.1881L2.2638 17.3955C1.58975 18.9453 2.60811 20.705 4.28766 20.8927C9.41329 21.4656 14.5868 21.4656 19.7124 20.8927C21.392 20.705 22.4103 18.9453 21.7363 17.3955L21.6461 17.1881C19.7333 12.7904 17.4084 8.58379 14.7023 4.62457L14.2704 3.99262ZM10.9681 4.83903C11.4644 4.11282 12.5357 4.11282 13.032 4.83903L13.4639 5.47098C16.1165 9.352 18.3956 13.4755 20.2705 17.7863L20.3608 17.9938C20.6322 18.6178 20.2221 19.3264 19.5458 19.402C14.5309 19.9625 9.46917 19.9625 4.45427 19.402C3.77797 19.3264 3.36791 18.6178 3.63933 17.9938L3.72954 17.7863C5.6045 13.4755 7.88354 9.35199 10.5361 5.47098L10.9681 4.83903Z" fill="#FFC01E"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CInventoryEntry154D1060 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:1060;154:1035"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:1060;154:1036"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/c796/62d0/f64c499e7a7a6c64724c3b5f5e5669f5)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I154:1060;154:1037"
            style={{"marginLeft":115,"marginRight":39,"flexGrow":1,"marginTop":6,"marginBottom":67,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Gold Medal All Purpose Flour</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I154:1060;154:1040"
            style={{"marginLeft":225,"marginRight":28,"flexGrow":1,"marginTop":37,"marginBottom":17,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="10">12/13/2021</span>
              <br key="br10" />
              <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="14">200</span>
              <span style={{}} key="20">/4536g</span>
              <br key="br20" />
              <span style={{}} key="end">1 -  10lb container</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="I154:1060;154:1038"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":53,"marginBottom":29,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="8">Best By:</span>
              <br key="br8" />
              <span style={{}} key="15">Grams:</span>
              <br key="br15" />
              <span style={{}} key="end">Quantity: </span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv centerer">
          <div
            id="I154:1060;154:1041"
            style={{"marginLeft":309,"marginRight":17,"flexGrow":1,"marginTop":10,"marginBottom":74}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0001 8.99999C13.0001 9.55227 12.5523 9.99999 12.0001 9.99999C11.4478 9.99999 11.0001 9.55227 11.0001 8.99999C11.0001 8.4477 11.4478 7.99999 12.0001 7.99999C12.5523 7.99999 13.0001 8.4477 13.0001 8.99999Z" fill="#FFC01E"/>
<path d="M12.0001 11.75C12.4143 11.75 12.7501 12.0858 12.7501 12.5V17.5C12.7501 17.9142 12.4143 18.25 12.0001 18.25C11.5858 18.25 11.2501 17.9142 11.2501 17.5V12.5C11.2501 12.0858 11.5858 11.75 12.0001 11.75Z" fill="#FFC01E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2704 3.99262C13.1784 2.39496 10.8216 2.39495 9.72967 3.99262L9.29775 4.62457C6.59171 8.58378 4.26675 12.7904 2.35402 17.1881L2.2638 17.3955C1.58975 18.9453 2.60811 20.705 4.28766 20.8927C9.41329 21.4656 14.5868 21.4656 19.7124 20.8927C21.392 20.705 22.4103 18.9453 21.7363 17.3955L21.6461 17.1881C19.7333 12.7904 17.4084 8.58379 14.7023 4.62457L14.2704 3.99262ZM10.9681 4.83903C11.4644 4.11282 12.5357 4.11282 13.032 4.83903L13.4639 5.47098C16.1165 9.352 18.3956 13.4755 20.2705 17.7863L20.3608 17.9938C20.6322 18.6178 20.2221 19.3264 19.5458 19.402C14.5309 19.9625 9.46917 19.9625 4.45427 19.402C3.77797 19.3264 3.36791 18.6178 3.63933 17.9938L3.72954 17.7863C5.6045 13.4755 7.88354 9.35199 10.5361 5.47098L10.9681 4.83903Z" fill="#FFC01E"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CInventoryEntry184D1239 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:1239;154:1035"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I184:1239;154:1036"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/c796/62d0/f64c499e7a7a6c64724c3b5f5e5669f5)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I184:1239;154:1037"
            style={{"marginLeft":115,"marginRight":39,"flexGrow":1,"marginTop":6,"marginBottom":67,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Gold Medal All Purpose Flour</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I184:1239;154:1040"
            style={{"marginLeft":225,"marginRight":28,"flexGrow":1,"marginTop":37,"marginBottom":17,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="10">12/13/2021</span>
              <br key="br10" />
              <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="14">200</span>
              <span style={{}} key="20">/4536g</span>
              <br key="br20" />
              <span style={{}} key="end">1 -  10lb container</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="I184:1239;154:1038"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":53,"marginBottom":29,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="8">Best By:</span>
              <br key="br8" />
              <span style={{}} key="15">Grams:</span>
              <br key="br15" />
              <span style={{}} key="end">Quantity: </span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv centerer">
          <div
            id="I184:1239;154:1041"
            style={{"marginLeft":309,"marginRight":17,"flexGrow":1,"marginTop":10,"marginBottom":74}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0001 9.00005C13.0001 9.55233 12.5523 10 12.0001 10C11.4478 10 11.0001 9.55233 11.0001 9.00005C11.0001 8.44776 11.4478 8.00005 12.0001 8.00005C12.5523 8.00005 13.0001 8.44776 13.0001 9.00005Z" fill="#FFC01E"/>
<path d="M12.0001 11.75C12.4143 11.75 12.7501 12.0858 12.7501 12.5V17.5C12.7501 17.9143 12.4143 18.25 12.0001 18.25C11.5858 18.25 11.2501 17.9143 11.2501 17.5V12.5C11.2501 12.0858 11.5858 11.75 12.0001 11.75Z" fill="#FFC01E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2704 3.99268C13.1784 2.39502 10.8216 2.39501 9.72967 3.99268L9.29775 4.62463C6.59171 8.58384 4.26675 12.7905 2.35402 17.1881L2.2638 17.3956C1.58975 18.9453 2.60811 20.705 4.28766 20.8927C9.41329 21.4656 14.5868 21.4656 19.7124 20.8927C21.392 20.705 22.4103 18.9453 21.7363 17.3956L21.6461 17.1881C19.7333 12.7905 17.4084 8.58385 14.7023 4.62463L14.2704 3.99268ZM10.9681 4.83909C11.4644 4.11288 12.5357 4.11288 13.032 4.83909L13.4639 5.47104C16.1165 9.35206 18.3956 13.4756 20.2705 17.7864L20.3608 17.9938C20.6322 18.6179 20.2221 19.3264 19.5458 19.402C14.5309 19.9625 9.46917 19.9625 4.45427 19.402C3.77797 19.3264 3.36791 18.6179 3.63933 17.9938L3.72954 17.7864C5.6045 13.4756 7.88354 9.35205 10.5361 5.47104L10.9681 4.83909Z" fill="#FFC01E"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CInventoryEntry184D1289 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:1289;154:1035"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I184:1289;154:1036"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/c796/62d0/f64c499e7a7a6c64724c3b5f5e5669f5)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I184:1289;154:1037"
            style={{"marginLeft":115,"marginRight":39,"flexGrow":1,"marginTop":6,"marginBottom":67,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Gold Medal All Purpose Flour</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I184:1289;154:1040"
            style={{"marginLeft":225,"marginRight":28,"flexGrow":1,"marginTop":37,"marginBottom":17,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="10">12/13/2021</span>
              <br key="br10" />
              <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="14">200</span>
              <span style={{}} key="20">/4536g</span>
              <br key="br20" />
              <span style={{}} key="end">1 -  10lb container</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="I184:1289;154:1038"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":53,"marginBottom":29,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="8">Best By:</span>
              <br key="br8" />
              <span style={{}} key="15">Grams:</span>
              <br key="br15" />
              <span style={{}} key="end">Quantity: </span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv centerer">
          <div
            id="I184:1289;154:1041"
            style={{"marginLeft":309,"marginRight":17,"flexGrow":1,"marginTop":10,"marginBottom":74}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0001 9.00005C13.0001 9.55233 12.5523 10 12.0001 10C11.4478 10 11.0001 9.55233 11.0001 9.00005C11.0001 8.44776 11.4478 8.00005 12.0001 8.00005C12.5523 8.00005 13.0001 8.44776 13.0001 9.00005Z" fill="#FFC01E"/>
<path d="M12.0001 11.75C12.4143 11.75 12.7501 12.0858 12.7501 12.5V17.5C12.7501 17.9143 12.4143 18.25 12.0001 18.25C11.5858 18.25 11.2501 17.9143 11.2501 17.5V12.5C11.2501 12.0858 11.5858 11.75 12.0001 11.75Z" fill="#FFC01E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2704 3.99268C13.1784 2.39502 10.8216 2.39501 9.72967 3.99268L9.29775 4.62463C6.59171 8.58384 4.26675 12.7905 2.35402 17.1881L2.2638 17.3956C1.58975 18.9453 2.60811 20.705 4.28766 20.8927C9.41329 21.4656 14.5868 21.4656 19.7124 20.8927C21.392 20.705 22.4103 18.9453 21.7363 17.3956L21.6461 17.1881C19.7333 12.7905 17.4084 8.58385 14.7023 4.62463L14.2704 3.99268ZM10.9681 4.83909C11.4644 4.11288 12.5357 4.11288 13.032 4.83909L13.4639 5.47104C16.1165 9.35206 18.3956 13.4756 20.2705 17.7864L20.3608 17.9938C20.6322 18.6179 20.2221 19.3264 19.5458 19.402C14.5309 19.9625 9.46917 19.9625 4.45427 19.402C3.77797 19.3264 3.36791 18.6179 3.63933 17.9938L3.72954 17.7864C5.6045 13.4756 7.88354 9.35205 10.5361 5.47104L10.9681 4.83909Z" fill="#FFC01E"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CInventoryEntry184D1281 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:1281;154:1035"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I184:1281;154:1036"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/c796/62d0/f64c499e7a7a6c64724c3b5f5e5669f5)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I184:1281;154:1037"
            style={{"marginLeft":115,"marginRight":39,"flexGrow":1,"marginTop":6,"marginBottom":67,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Gold Medal All Purpose Flour</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I184:1281;154:1040"
            style={{"marginLeft":225,"marginRight":28,"flexGrow":1,"marginTop":37,"marginBottom":17,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="10">12/13/2021</span>
              <br key="br10" />
              <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="14">200</span>
              <span style={{}} key="20">/4536g</span>
              <br key="br20" />
              <span style={{}} key="end">1 -  10lb container</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="I184:1281;154:1038"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":53,"marginBottom":29,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="8">Best By:</span>
              <br key="br8" />
              <span style={{}} key="15">Grams:</span>
              <br key="br15" />
              <span style={{}} key="end">Quantity: </span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv centerer">
          <div
            id="I184:1281;154:1041"
            style={{"marginLeft":309,"marginRight":17,"flexGrow":1,"marginTop":10,"marginBottom":74}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0001 9.00005C13.0001 9.55233 12.5523 10 12.0001 10C11.4478 10 11.0001 9.55233 11.0001 9.00005C11.0001 8.44776 11.4478 8.00005 12.0001 8.00005C12.5523 8.00005 13.0001 8.44776 13.0001 9.00005Z" fill="#FFC01E"/>
<path d="M12.0001 11.75C12.4143 11.75 12.7501 12.0858 12.7501 12.5V17.5C12.7501 17.9143 12.4143 18.25 12.0001 18.25C11.5858 18.25 11.2501 17.9143 11.2501 17.5V12.5C11.2501 12.0858 11.5858 11.75 12.0001 11.75Z" fill="#FFC01E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2704 3.99268C13.1784 2.39502 10.8216 2.39501 9.72967 3.99268L9.29775 4.62463C6.59171 8.58384 4.26675 12.7905 2.35402 17.1881L2.2638 17.3956C1.58975 18.9453 2.60811 20.705 4.28766 20.8927C9.41329 21.4656 14.5868 21.4656 19.7124 20.8927C21.392 20.705 22.4103 18.9453 21.7363 17.3956L21.6461 17.1881C19.7333 12.7905 17.4084 8.58385 14.7023 4.62463L14.2704 3.99268ZM10.9681 4.83909C11.4644 4.11288 12.5357 4.11288 13.032 4.83909L13.4639 5.47104C16.1165 9.35206 18.3956 13.4756 20.2705 17.7864L20.3608 17.9938C20.6322 18.6179 20.2221 19.3264 19.5458 19.402C14.5309 19.9625 9.46917 19.9625 4.45427 19.402C3.77797 19.3264 3.36791 18.6179 3.63933 17.9938L3.72954 17.7864C5.6045 13.4756 7.88354 9.35205 10.5361 5.47104L10.9681 4.83909Z" fill="#FFC01E"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CInventoryCheckIndividualPage154D958 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="154:1068"
            style={{"marginLeft":26,"width":257,"minWidth":257,"height":null,"marginTop":-14,"marginBottom":648,"minHeight":178,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:1068;75:115"
                  style={{"marginLeft":79,"marginRight":0,"flexGrow":1,"marginTop":9,"marginBottom":-9,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:1068;75:115;44:50"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/523d/9d54/14d689c195210d72d7832f0be8c28f87)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I154:1068;75:116"
                  style={{"marginLeft":0,"marginRight":202,"flexGrow":1,"marginTop":57,"marginBottom":66}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 27.5C45.2605 26.5507 44.4909 25.7812 43.5417 25.7812H11.4584C10.5091 25.7812 9.73962 26.5507 9.73962 27.5C9.73962 28.4492 10.5091 29.2187 11.4584 29.2187H43.5417C44.4909 29.2187 45.2605 28.4492 45.2605 27.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 16.0417C45.2605 15.0924 44.4909 14.3229 43.5417 14.3229H11.4584C10.5091 14.3229 9.73962 15.0924 9.73962 16.0417C9.73962 16.9909 10.5091 17.7604 11.4584 17.7604H43.5417C44.4909 17.7604 45.2605 16.9909 45.2605 16.0417Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 38.9583C45.2605 38.0091 44.4909 37.2396 43.5417 37.2396H11.4584C10.5091 37.2396 9.73962 38.0091 9.73962 38.9583C9.73962 39.9076 10.5091 40.6771 11.4584 40.6771H43.5417C44.4909 40.6771 45.2605 39.9076 45.2605 38.9583Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I154:1068;75:124"
                  style={{"marginLeft":120,"marginRight":42,"flexGrow":1,"marginTop":140,"marginBottom":14,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"128.00000190734863%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Dry Goods</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I154:1068;154:935"
                  style={{"marginLeft":296,"marginRight":-63,"flexGrow":1,"marginTop":65,"marginBottom":89}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0303 8.53033C11.3232 8.23744 11.3232 7.76256 11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967L5.96967 11.4697C5.82322 11.6161 5.75 11.8081 5.75 12C5.75 12.1017 5.77024 12.1987 5.80691 12.2871C5.84351 12.3755 5.89776 12.4584 5.96967 12.5303L9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303C11.3232 16.2374 11.3232 15.7626 11.0303 15.4697L8.31066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H8.31066L11.0303 8.53033Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="154:1078"
            style={{"marginLeft":20,"width":342,"minWidth":342,"height":null,"marginTop":-640,"marginBottom":624,"minHeight":16,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"142.22222328186035%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Items 1/3 weight are automatically placed in shopping list</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="154:967"
            style={{"marginLeft":127,"width":131,"minWidth":131,"height":null,"marginTop":-589,"marginBottom":559,"minHeight":30,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:967;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:967;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I154:967;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I154:967;48:120;37:8;37:6"
                              style={{"marginLeft":8.251953125,"marginRight":8.251953125,"flexGrow":1,"marginTop":3.15789794921875,"marginBottom":3.15789794921875,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I154:967;48:120;37:8;37:7"
                              style={{"marginLeft":23.0709228515625,"marginRight":22.9290771484375,"flexGrow":1,"marginTop":6.26318359375,"marginBottom":7.73681640625,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"142.22222328186035%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Scan New Items</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="154:1102"
            style={{"marginLeft":27,"width":51,"minWidth":51,"height":null,"marginTop":-589,"marginBottom":559,"minHeight":30,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CSearchBar {...this.props} nodeId="154:1102" />
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="154:959"
            style={{"marginLeft":35,"width":314.0255126953125,"minWidth":314.0255126953125,"marginTop":-549.5,"marginBottom":549.5,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.5L314.025 0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="184:1247"
            style={{"marginLeft":13,"width":350,"minWidth":350,"height":null,"marginTop":-530,"marginBottom":-153,"minHeight":683,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv">
                <div
                  id="154:1044"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":0,"marginBottom":575,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <CInventoryEntry {...this.props} nodeId="154:1044" />
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="154:1052"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-568,"marginBottom":460,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <CInventoryEntry {...this.props} nodeId="154:1052" />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv">
                <div
                  id="154:1060"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-453,"marginBottom":345,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <CInventoryEntry {...this.props} nodeId="154:1060" />
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv">
                <div
                  id="184:1239"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-338,"marginBottom":230,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <CInventoryEntry {...this.props} nodeId="184:1239" />
                </div>
              </div>
              <div style={{"zIndex":4}} className="outerDiv">
                <div
                  id="184:1289"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-223,"marginBottom":115,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <CInventoryEntry {...this.props} nodeId="184:1289" />
                </div>
              </div>
              <div style={{"zIndex":5}} className="outerDiv">
                <div
                  id="184:1281"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-108,"marginBottom":0,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <CInventoryEntry {...this.props} nodeId="184:1281" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv centerer">
          <div
            id="154:1079"
            style={{"width":"6.4%","marginLeft":"86.93333333333334%","height":"2.955665024630542%","top":"27.832512315270936%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4697 7.53033C13.7626 7.82322 14.2374 7.82322 14.5303 7.53033L15.25 6.81066L15.25 17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17L16.75 6.81066L17.4697 7.53033C17.7626 7.82322 18.2374 7.82322 18.5303 7.53033C18.8232 7.23744 18.8232 6.76256 18.5303 6.46967L16.5303 4.46967C16.2374 4.17678 15.7626 4.17678 15.4697 4.46967L13.4697 6.46967C13.1768 6.76256 13.1768 7.23744 13.4697 7.53033Z" fill="#C4C4C4"/>
<path d="M8.75 17.1893L9.46967 16.4697C9.76256 16.1768 10.2374 16.1768 10.5303 16.4697C10.8232 16.7626 10.8232 17.2374 10.5303 17.5303L8.53033 19.5303C8.23744 19.8232 7.76256 19.8232 7.46967 19.5303L5.46967 17.5303C5.17678 17.2374 5.17678 16.7626 5.46967 16.4697C5.76256 16.1768 6.23744 16.1768 6.53033 16.4697L7.25 17.1893L7.25 7C7.25 6.58579 7.58579 6.25 8 6.25C8.41421 6.25 8.75 6.58579 8.75 7L8.75 17.1893Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv centerer">
          <div
            id="154:1080"
            style={{"width":"6.4%","marginLeft":"80.26666666666667%","height":"2.955665024630542%","top":"27.832512315270936%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9859 5.42367C14.0077 4.97906 9.99236 4.97906 6.01419 5.42367C5.74502 5.45376 5.6154 5.76941 5.78574 5.97998L9.30276 10.3275C10.5627 11.8849 11.25 13.8275 11.25 15.8307V18.7199L12.75 19.8199V15.8307C12.75 13.8275 13.4374 11.8849 14.6973 10.3275L18.2143 5.97998C18.3846 5.76941 18.255 5.45376 17.9859 5.42367ZM5.84758 3.93296C9.93648 3.47596 14.0636 3.47596 18.1525 3.93296C19.5994 4.09467 20.2962 5.79146 19.3805 6.92339L15.8635 11.2709C14.8195 12.5614 14.25 14.1709 14.25 15.8307V21.3C14.25 21.5826 14.0911 21.8413 13.839 21.969C13.5869 22.0968 13.2844 22.0719 13.0565 21.9048L10.0565 19.7048C9.86384 19.5635 9.75002 19.3389 9.75002 19.1V15.8307C9.75002 14.1709 9.18049 12.5614 8.13658 11.2709L4.61956 6.92339C3.70387 5.79146 4.40065 4.09467 5.84758 3.93296Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CSearchBar227D862 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I227:862;154:1090"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"1px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I227:862;154:1091"
            style={{"marginLeft":14,"marginRight":13,"flexGrow":1,"marginTop":3,"marginBottom":3}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3851 15.4457C11.7349 17.5684 7.85544 17.4013 5.39866 14.9445C2.76262 12.3085 2.76262 8.03464 5.39866 5.3986C8.0347 2.76256 12.3086 2.76256 14.9446 5.3986C17.4014 7.85538 17.5685 11.7348 15.4458 14.3851L20.6014 19.5407C20.8943 19.8336 20.8943 20.3085 20.6014 20.6014C20.3085 20.8943 19.8337 20.8943 19.5408 20.6014L14.3851 15.4457ZM6.45932 13.8839C4.40907 11.8336 4.40907 8.50951 6.45932 6.45926C8.50957 4.40901 11.8337 4.40901 13.8839 6.45926C15.9327 8.50801 15.9342 11.8287 13.8885 13.8794C13.8869 13.8809 13.8854 13.8823 13.8839 13.8839C13.8824 13.8854 13.8809 13.8869 13.8794 13.8884C11.8288 15.9341 8.50807 15.9326 6.45932 13.8839Z" fill="#C4C4C4" fill-opacity="0.5"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CInventoryEntry227D852 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I227:852;154:1035"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I227:852;154:1036"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/c796/62d0/f64c499e7a7a6c64724c3b5f5e5669f5)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I227:852;154:1037"
            style={{"marginLeft":115,"marginRight":39,"flexGrow":1,"marginTop":6,"marginBottom":67,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Spinach</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I227:852;154:1040"
            style={{"marginLeft":225,"marginRight":28,"flexGrow":1,"marginTop":37,"marginBottom":17,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="10">12/13/2021</span>
              <br key="br10" />
              <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="14">200</span>
              <span style={{}} key="20">/4536g</span>
              <br key="br20" />
              <span style={{}} key="end">1 -  10lb container</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="I227:852;154:1038"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":53,"marginBottom":29,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="8">Best By:</span>
              <br key="br8" />
              <span style={{}} key="15">Grams:</span>
              <br key="br15" />
              <span style={{}} key="end">Quantity: </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CInventoryEntry227D853 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I227:853;154:1035"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I227:853;154:1036"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/a834/1681/78373e2dd71d8f5ea1b6d4b07e69bab0)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I227:853;154:1037"
            style={{"marginLeft":115,"marginRight":39,"flexGrow":1,"marginTop":6,"marginBottom":67,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Publix Fruit Bowl</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I227:853;154:1040"
            style={{"marginLeft":225,"marginRight":28,"flexGrow":1,"marginTop":37,"marginBottom":17,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="10">12/13/2021</span>
              <br key="br10" />
              <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="14">200</span>
              <span style={{}} key="20">/4536g</span>
              <br key="br20" />
              <span style={{}} key="end">1 -  10lb container</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="I227:853;154:1038"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":53,"marginBottom":29,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="8">Best By:</span>
              <br key="br8" />
              <span style={{}} key="15">Grams:</span>
              <br key="br15" />
              <span style={{}} key="end">Quantity: </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CInventoryEntry227D854 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I227:854;154:1035"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I227:854;154:1036"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/c643/76dd/1ca8adb8db6b7257a2114e4cd9db40f4)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I227:854;154:1037"
            style={{"marginLeft":115,"marginRight":39,"flexGrow":1,"marginTop":6,"marginBottom":67,"color":"rgba(0, 0, 0, 1)","fontSize":10,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"106.66666984558105%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Yoplait Original Yogurt, Strawberry and Strawberry Banana, Variety Pack, 48 oz</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I227:854;154:1040"
            style={{"marginLeft":225,"marginRight":28,"flexGrow":1,"marginTop":37,"marginBottom":17,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="10">12/13/2021</span>
              <br key="br10" />
              <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="14">200</span>
              <span style={{}} key="20">/4536g</span>
              <br key="br20" />
              <span style={{}} key="end">1 -  10lb container</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="I227:854;154:1038"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":53,"marginBottom":29,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="8">Best By:</span>
              <br key="br8" />
              <span style={{}} key="15">Grams:</span>
              <br key="br15" />
              <span style={{}} key="end">Quantity: </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CGarbageList227D847 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="227:858"
            style={{"marginLeft":26,"width":257,"minWidth":257,"height":null,"marginTop":-14,"marginBottom":648,"minHeight":178,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I227:858;75:115"
                  style={{"marginLeft":79,"marginRight":0,"flexGrow":1,"marginTop":9,"marginBottom":-9,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I227:858;75:115;44:50"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/523d/9d54/14d689c195210d72d7832f0be8c28f87)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I227:858;75:116"
                  style={{"marginLeft":0,"marginRight":202,"flexGrow":1,"marginTop":57,"marginBottom":66}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2603 27.5C45.2603 26.5507 44.4908 25.7812 43.5416 25.7812H11.4583C10.509 25.7812 9.7395 26.5507 9.7395 27.5C9.7395 28.4492 10.509 29.2187 11.4583 29.2187H43.5416C44.4908 29.2187 45.2603 28.4492 45.2603 27.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2603 16.0417C45.2603 15.0924 44.4908 14.3229 43.5416 14.3229H11.4583C10.509 14.3229 9.7395 15.0924 9.7395 16.0417C9.7395 16.9909 10.509 17.7604 11.4583 17.7604H43.5416C44.4908 17.7604 45.2603 16.9909 45.2603 16.0417Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2603 38.9583C45.2603 38.0091 44.4908 37.2396 43.5416 37.2396H11.4583C10.509 37.2396 9.7395 38.0091 9.7395 38.9583C9.7395 39.9076 10.509 40.6771 11.4583 40.6771H43.5416C44.4908 40.6771 45.2603 39.9076 45.2603 38.9583Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I227:858;75:124"
                  style={{"marginLeft":112,"marginRight":34,"flexGrow":1,"marginTop":140,"marginBottom":14,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"128.00000190734863%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Garbage List</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I227:858;154:935"
                  style={{"marginLeft":296,"marginRight":-63,"flexGrow":1,"marginTop":65,"marginBottom":89}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0303 8.53033C11.3232 8.23744 11.3232 7.76256 11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967L5.96967 11.4697C5.82322 11.6161 5.75 11.8081 5.75 12C5.75 12.1017 5.77024 12.1987 5.80691 12.2871C5.84351 12.3755 5.89776 12.4584 5.96967 12.5303L9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303C11.3232 16.2374 11.3232 15.7626 11.0303 15.4697L8.31066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H8.31066L11.0303 8.53033Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="227:859"
            style={{"marginLeft":20,"width":342,"minWidth":342,"height":null,"marginTop":-640,"marginBottom":624,"minHeight":16,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"142.22222328186035%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Items are automatically placed on the shopping list</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="227:850"
            style={{"marginLeft":127,"width":131,"minWidth":131,"height":null,"marginTop":-589,"marginBottom":559,"minHeight":30,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I227:850;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I227:850;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I227:850;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I227:850;48:120;37:8;37:6"
                              style={{"marginLeft":8.251953125,"marginRight":8.251953125,"flexGrow":1,"marginTop":3.15789794921875,"marginBottom":3.15789794921875,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I227:850;48:120;37:8;37:7"
                              style={{"marginLeft":24.07080078125,"marginRight":24.92919921875,"flexGrow":1,"marginTop":6.26318359375,"marginBottom":7.73681640625,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"142.22222328186035%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Add New Items</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="227:862"
            style={{"marginLeft":27,"width":51,"minWidth":51,"height":null,"marginTop":-589,"marginBottom":559,"minHeight":30,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CSearchBar {...this.props} nodeId="227:862" />
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="227:848"
            style={{"marginLeft":35,"width":314.025390625,"minWidth":314.025390625,"marginTop":-549.5,"marginBottom":549.5,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.5L314.025 0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="227:851"
            style={{"marginLeft":13,"width":350,"minWidth":350,"height":null,"marginTop":-530,"marginBottom":192,"minHeight":338,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv">
                <div
                  id="227:852"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":0,"marginBottom":230,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <CInventoryEntry {...this.props} nodeId="227:852" />
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="227:853"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-223,"marginBottom":115,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <CInventoryEntry {...this.props} nodeId="227:853" />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv">
                <div
                  id="227:854"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-108,"marginBottom":0,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <CInventoryEntry {...this.props} nodeId="227:854" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv centerer">
          <div
            id="227:860"
            style={{"width":"6.4%","marginLeft":"86.93333333333334%","height":"2.955665024630542%","top":"27.832512315270936%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4697 7.53033C13.7626 7.82322 14.2374 7.82322 14.5303 7.53033L15.25 6.81066L15.25 17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17L16.75 6.81066L17.4697 7.53033C17.7626 7.82322 18.2374 7.82322 18.5303 7.53033C18.8232 7.23744 18.8232 6.76256 18.5303 6.46967L16.5303 4.46967C16.2374 4.17678 15.7626 4.17678 15.4697 4.46967L13.4697 6.46967C13.1768 6.76256 13.1768 7.23744 13.4697 7.53033Z" fill="#C4C4C4"/>
<path d="M8.75 17.1893L9.46967 16.4697C9.76256 16.1768 10.2374 16.1768 10.5303 16.4697C10.8232 16.7626 10.8232 17.2374 10.5303 17.5303L8.53033 19.5303C8.23744 19.8232 7.76256 19.8232 7.46967 19.5303L5.46967 17.5303C5.17678 17.2374 5.17678 16.7626 5.46967 16.4697C5.76256 16.1768 6.23744 16.1768 6.53033 16.4697L7.25 17.1893L7.25 7C7.25 6.58579 7.58579 6.25 8 6.25C8.41421 6.25 8.75 6.58579 8.75 7L8.75 17.1893Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv centerer">
          <div
            id="227:861"
            style={{"width":"6.4%","marginLeft":"80.26666666666667%","height":"2.955665024630542%","top":"27.832512315270936%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9857 5.42367C14.0076 4.97906 9.99224 4.97906 6.01407 5.42367C5.7449 5.45376 5.61528 5.76941 5.78562 5.97998L9.30264 10.3275C10.5625 11.8849 11.2499 13.8275 11.2499 15.8307V18.7199L12.7499 19.8199V15.8307C12.7499 13.8275 13.4373 11.8849 14.6972 10.3275L18.2142 5.97998C18.3845 5.76941 18.2549 5.45376 17.9857 5.42367ZM5.84746 3.93296C9.93636 3.47596 14.0634 3.47596 18.1523 3.93296C19.5993 4.09467 20.2961 5.79146 19.3804 6.92339L15.8633 11.2709C14.8194 12.5614 14.2499 14.1709 14.2499 15.8307V21.3C14.2499 21.5826 14.091 21.8413 13.8389 21.969C13.5868 22.0968 13.2843 22.0719 13.0564 21.9048L10.0564 19.7048C9.86372 19.5635 9.7499 19.3389 9.7499 19.1V15.8307C9.7499 14.1709 9.18037 12.5614 8.13646 11.2709L4.61944 6.92339C3.70375 5.79146 4.40053 4.09467 5.84746 3.93296Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CRecipesHomePage63D138 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="103:175"
            style={{"marginLeft":26,"width":257,"minWidth":257,"height":null,"marginTop":-12,"marginBottom":646,"minHeight":178,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I103:175;75:115"
                  style={{"marginLeft":79,"marginRight":0,"flexGrow":1,"marginTop":9,"marginBottom":-9,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I103:175;75:115;44:50"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/523d/9d54/14d689c195210d72d7832f0be8c28f87)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I103:175;75:116"
                  style={{"marginLeft":0,"marginRight":202,"flexGrow":1,"marginTop":57,"marginBottom":66}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 27.5C45.2605 26.5507 44.4909 25.7812 43.5417 25.7812H11.4584C10.5091 25.7812 9.73962 26.5507 9.73962 27.5C9.73962 28.4492 10.5091 29.2187 11.4584 29.2187H43.5417C44.4909 29.2187 45.2605 28.4492 45.2605 27.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 16.0417C45.2605 15.0924 44.4909 14.3229 43.5417 14.3229H11.4584C10.5091 14.3229 9.73962 15.0924 9.73962 16.0417C9.73962 16.9909 10.5091 17.7604 11.4584 17.7604H43.5417C44.4909 17.7604 45.2605 16.9909 45.2605 16.0417Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 38.9583C45.2605 38.0091 44.4909 37.2396 43.5417 37.2396H11.4584C10.5091 37.2396 9.73962 38.0091 9.73962 38.9583C9.73962 39.9076 10.5091 40.6771 11.4584 40.6771H43.5417C44.4909 40.6771 45.2605 39.9076 45.2605 38.9583Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I103:175;75:124"
                  style={{"marginLeft":133,"marginRight":56,"flexGrow":1,"marginTop":140,"marginBottom":14,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"128.00000190734863%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Recipes</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I103:175;154:935"
                  style={{"marginLeft":296,"marginRight":-63,"flexGrow":1,"marginTop":65,"marginBottom":89}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0303 8.53033C11.3232 8.23744 11.3232 7.76256 11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967L5.96967 11.4697C5.82322 11.6161 5.75 11.8081 5.75 12C5.75 12.1017 5.77024 12.1987 5.80691 12.2871C5.84351 12.3755 5.89776 12.4584 5.96967 12.5303L9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303C11.3232 16.2374 11.3232 15.7626 11.0303 15.4697L8.31066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H8.31066L11.0303 8.53033Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="103:186"
            style={{"marginLeft":32,"width":313,"minWidth":313,"height":null,"marginTop":-628,"marginBottom":583,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I103:186;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I103:186;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I103:186;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I103:186;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.736846923828125,"marginBottom":4.736846923828125,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I103:186;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.7952880859375,"flexGrow":1,"marginTop":10.394744873046875,"marginBottom":10.605255126953125,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Add New Recipe</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="154:865"
            style={{"marginLeft":32,"width":313,"minWidth":313,"height":null,"marginTop":-570,"marginBottom":525,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:865;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:865;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I154:865;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I154:865;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.736846923828125,"marginBottom":4.736846923828125,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I154:865;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.7952880859375,"flexGrow":1,"marginTop":10.394744873046875,"marginBottom":10.605255126953125,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">My Favorites</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="63:139"
            style={{"marginLeft":35,"width":314.0255126953125,"minWidth":314.0255126953125,"marginTop":-512,"marginBottom":512,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="77:125"
            style={{"marginLeft":32,"width":144,"minWidth":144,"height":null,"marginTop":-494,"marginBottom":350,"minHeight":144,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="75:175"
                  style={{"marginLeft":12,"marginRight":11,"flexGrow":1,"marginTop":12,"marginBottom":11,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/0a2f/a39e/dc5f5730b93956dc5282ce9d798d4852)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="77:123"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(229, 229, 229, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="77:124"
                  style={{"marginLeft":32,"marginRight":32,"flexGrow":1,"marginTop":60,"marginBottom":60,"color":"rgba(255, 255, 255, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">low energy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="77:137"
            style={{"marginLeft":199,"width":144,"minWidth":144,"height":null,"marginTop":-494,"marginBottom":350,"minHeight":144,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="77:131"
                  style={{"marginLeft":12,"marginRight":11,"flexGrow":1,"marginTop":11,"marginBottom":12,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/ec6f/adb5/c1b9e1ea1e2fb78dff79130bd5d602cf)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="77:135"
                  style={{"marginLeft":1,"marginRight":-1,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(229, 229, 229, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="77:136"
                  style={{"marginLeft":35,"marginRight":35,"flexGrow":1,"marginTop":60,"marginBottom":60,"color":"rgba(255, 255, 255, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">15-20 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="77:151"
            style={{"marginLeft":32,"width":144,"minWidth":144,"height":null,"marginTop":-317,"marginBottom":173,"minHeight":144,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="77:148"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(229, 229, 229, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="77:150"
                  style={{"marginLeft":11,"marginRight":12,"flexGrow":1,"marginTop":12,"marginBottom":11,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/033b/cf52/d112a0bef0b81b237ffb4d3a4f113417)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="77:149"
                  style={{"marginLeft":35,"marginRight":35,"flexGrow":1,"marginTop":60,"marginBottom":60,"color":"rgba(255, 255, 255, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">30-40 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="77:152"
            style={{"marginLeft":199,"width":144,"minWidth":144,"height":null,"marginTop":-317,"marginBottom":173,"minHeight":144,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="77:154"
                  style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","border":"1px solid rgba(229, 229, 229, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="77:156"
                  style={{"width":"84.02777777777777%","marginLeft":"8.333333333333334%","height":"84.02777777777777%","top":"7.638888888888889%","backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/6bbd/966a/bb3f6d1b7f11c50f7c2e70bcfb0c8e24)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="77:155"
                  style={{"width":"50%","marginLeft":"25%","height":"16.666666666666668%","top":"41.666666666666664%","color":"rgba(255, 255, 255, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">meal prep</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="63:143"
            style={{"marginLeft":30,"width":313,"minWidth":313,"height":null,"marginTop":-136,"marginBottom":91,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I63:143;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I63:143;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I63:143;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I63:143;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.736846923828125,"marginBottom":4.736846923828125,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I63:143;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.7952880859375,"flexGrow":1,"marginTop":10.394744873046875,"marginBottom":10.605255126953125,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">View All</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class COrderTakeout154D918 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:918;154:913"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:918;154:914"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/c6e6/bb7d/930a7897f39a3084e7304ab0e65dadd6)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I154:918;154:915"
            style={{"marginLeft":115,"marginRight":77,"flexGrow":1,"marginTop":13,"marginBottom":60,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Chick-fil-a</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I154:918;154:916"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":58,"marginBottom":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">My Order: Spicy Chicken Sandwich, no pickles, medium fry, medium sunjoy extra ice</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class COrderTakeout154D923 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:923;154:913"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:923;154:914"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/8975/0c80/2cd64facf9cfa179c096957971e3a202)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I154:923;154:915"
            style={{"marginLeft":115,"marginRight":77,"flexGrow":1,"marginTop":13,"marginBottom":60,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Mynt Indian Cuisine</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I154:923;154:916"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":58,"marginBottom":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">My Order: Spicy Chicken Sandwich, no pickles, medium fry, medium sunjoy extra ice</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class COrderTakeout154D929 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:929;154:913"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:929;154:914"
            style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/f608/8097/df849441048b235b4e6e97216546ce5b)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I154:929;154:915"
            style={{"marginLeft":115,"marginRight":77,"flexGrow":1,"marginTop":13,"marginBottom":60,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Moe’s Southwest Grill</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I154:929;154:916"
            style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":58,"marginBottom":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">My Order: Spicy Chicken Sandwich, no pickles, medium fry, medium sunjoy extra ice</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CNEW184D1025 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:1025;184:1020"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(232, 113, 33, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I184:1025;184:1019"
            style={{"marginLeft":0.7432861328125,"marginRight":0,"flexGrow":1,"marginTop":2.25,"marginBottom":1.5,"color":"rgba(255, 255, 255, 1)","fontSize":10,"fontWeight":900,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"256.00000381469727%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">NEW!</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class COrderTakeoutPage154D871 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="154:881"
            style={{"marginLeft":26,"width":257,"minWidth":257,"height":null,"marginTop":-12,"marginBottom":646,"minHeight":178,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:881;75:115"
                  style={{"marginLeft":79,"marginRight":0,"flexGrow":1,"marginTop":9,"marginBottom":-9,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:881;75:115;44:50"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/523d/9d54/14d689c195210d72d7832f0be8c28f87)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I154:881;75:116"
                  style={{"marginLeft":0,"marginRight":202,"flexGrow":1,"marginTop":57,"marginBottom":66}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 27.5C45.2605 26.5507 44.4909 25.7812 43.5417 25.7812H11.4584C10.5091 25.7812 9.73962 26.5507 9.73962 27.5C9.73962 28.4492 10.5091 29.2187 11.4584 29.2187H43.5417C44.4909 29.2187 45.2605 28.4492 45.2605 27.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 16.0416C45.2605 15.0924 44.4909 14.3229 43.5417 14.3229H11.4584C10.5091 14.3229 9.73962 15.0924 9.73962 16.0416C9.73962 16.9909 10.5091 17.7604 11.4584 17.7604H43.5417C44.4909 17.7604 45.2605 16.9909 45.2605 16.0416Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 38.9583C45.2605 38.0091 44.4909 37.2395 43.5417 37.2395H11.4584C10.5091 37.2395 9.73962 38.0091 9.73962 38.9583C9.73962 39.9075 10.5091 40.677 11.4584 40.677H43.5417C44.4909 40.677 45.2605 39.9075 45.2605 38.9583Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I154:881;75:124"
                  style={{"marginLeft":103,"marginRight":26,"flexGrow":1,"marginTop":140,"marginBottom":14,"color":"rgba(232, 113, 33, 1)","fontSize":20,"fontWeight":800,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"italic","lineHeight":"128.00000190734863%","letterSpacing":"0.4px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Order Takeout</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I154:881;154:935"
                  style={{"marginLeft":296,"marginRight":-63,"flexGrow":1,"marginTop":65,"marginBottom":89}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0303 8.53033C11.3232 8.23744 11.3232 7.76256 11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967L5.96967 11.4697C5.82322 11.6161 5.75 11.8081 5.75 12C5.75 12.1017 5.77024 12.1987 5.80691 12.2871C5.84351 12.3755 5.89776 12.4584 5.96967 12.5303L9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303C11.3232 16.2374 11.3232 15.7626 11.0303 15.4697L8.31066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H8.31066L11.0303 8.53033Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="154:882"
            style={{"marginLeft":32,"width":313,"minWidth":313,"height":null,"marginTop":-628,"marginBottom":583,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:882;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:882;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I154:882;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I154:882;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.73681640625,"marginBottom":4.73681640625,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I154:882;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.7952880859375,"flexGrow":1,"marginTop":10.394775390625,"marginBottom":10.605224609375,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Add New Restaurant</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="154:883"
            style={{"marginLeft":32,"width":313,"minWidth":313,"height":null,"marginTop":-570,"marginBottom":525,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:883;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="154:872"
            style={{"marginLeft":30,"width":314.0255126953125,"minWidth":314.0255126953125,"marginTop":-559,"marginBottom":559,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="154:934"
            style={{"marginLeft":13,"width":350,"minWidth":350,"height":null,"marginTop":-546,"marginBottom":182,"minHeight":364,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv">
                <div
                  id="154:918"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":0,"marginBottom":256,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <COrderTakeout {...this.props} nodeId="154:918" />
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="154:923"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-236,"marginBottom":128,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <COrderTakeout {...this.props} nodeId="154:923" />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv">
                <div
                  id="154:929"
                  style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-108,"marginBottom":0,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <COrderTakeout {...this.props} nodeId="154:929" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="184:1025"
            style={{"marginLeft":285,"width":55,"minWidth":55,"height":null,"marginTop":-528,"marginBottom":507,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CNEW {...this.props} nodeId="184:1025" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="154:873"
            style={{"marginLeft":30,"width":313,"minWidth":313,"height":null,"marginTop":-153,"marginBottom":108,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:873;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:873;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I154:873;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I154:873;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.73681640625,"marginBottom":4.73687744140625,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I154:873;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.7952880859375,"flexGrow":1,"marginTop":10.39471435546875,"marginBottom":10.60528564453125,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">View All</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CSearchBar184D980 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:980;154:1089"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"1px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I184:980;154:1087"
            style={{"marginLeft":13,"marginRight":263,"flexGrow":1,"marginTop":3,"marginBottom":3}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.385 15.4458C11.7348 17.5685 7.85532 17.4014 5.39854 14.9446C2.7625 12.3086 2.7625 8.0347 5.39854 5.39866C8.03458 2.76262 12.3084 2.76262 14.9445 5.39866C17.4013 7.85544 17.5683 11.7349 15.4457 14.3851L20.6013 19.5408C20.8942 19.8337 20.8942 20.3085 20.6013 20.6014C20.3084 20.8943 19.8335 20.8943 19.5407 20.6014L14.385 15.4458ZM6.4592 13.8839C4.40895 11.8337 4.40895 8.50957 6.4592 6.45932C8.50945 4.40907 11.8336 4.40907 13.8838 6.45932C15.9326 8.50807 15.9341 11.8288 13.8883 13.8794C13.8868 13.8809 13.8853 13.8824 13.8838 13.8839C13.8823 13.8854 13.8808 13.8869 13.8793 13.8884C11.8287 15.9342 8.50795 15.9327 6.4592 13.8839Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CSelectButton184D1044 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:1044;184:1028"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I184:1044;184:1029"
            style={{"marginLeft":16.4000244140625,"marginRight":15.5999755859375,"flexGrow":1,"marginTop":5.800048828125,"marginBottom":7.4580078125,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Select</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//class CSelectButtonI184D1004S184:1044 extends PureComponent {
  //render() {
    //return (
      //<div>
        //<div style={{}} className="outerDiv centerer">
         // <div
            //id="I184:1004;184:1044;184:1028"
 //           style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
            //className="innerDiv"
  //        >
    //        <div>
      //      </div>
        //  </div>
       // </div>
       // <div style={{"zIndex":1}} className="outerDiv centerer">
        //  <div
            //id="I184:1004;184:1044;184:1029"
//            style={{"marginLeft":16.4000244140625,"marginRight":15.5999755859375,"flexGrow":1,"marginTop":5.79998779296875,"marginBottom":7.45806884765625,"color":"rgba(0, 0, 0, 1)","fontSize":14,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"182.8571319580078%","letterSpacing":"0px"}}
            //className="innerDiv"
  //        >
    //        <div>
      //        <span style={{}} key="end">Select</span>
        //    </div>
         // </div>
       // </div>
    //  </div>
   // );
 // }
//}

class CLargeTextBox184D1014 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:1014;184:998"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I184:1014;184:999"
            style={{"marginLeft":16,"marginRight":191,"flexGrow":1,"marginTop":23,"marginBottom":217,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">What is your order?</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I184:1014;184:1000"
            style={{"marginLeft":20,"marginRight":22,"flexGrow":1,"marginTop":61,"marginBottom":47,"border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I184:1014;184:1001"
            style={{"marginLeft":218,"marginRight":33,"flexGrow":1,"marginTop":229,"marginBottom":23,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"italic","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">0 of 280 characters</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class COrderTakeoutAddNewRestaurant184D931 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="184:934"
            style={{"marginLeft":26,"width":257,"minWidth":257,"height":null,"marginTop":-12,"marginBottom":719,"minHeight":178,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:934;75:115"
                  style={{"marginLeft":79,"marginRight":0,"flexGrow":1,"marginTop":9,"marginBottom":-9,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I184:934;75:115;44:50"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/523d/9d54/14d689c195210d72d7832f0be8c28f87)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I184:934;75:116"
                  style={{"marginLeft":0,"marginRight":202,"flexGrow":1,"marginTop":57,"marginBottom":66}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 27.5C45.2605 26.5507 44.4909 25.7812 43.5417 25.7812H11.4584C10.5091 25.7812 9.73962 26.5507 9.73962 27.5C9.73962 28.4492 10.5091 29.2187 11.4584 29.2187H43.5417C44.4909 29.2187 45.2605 28.4492 45.2605 27.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 16.0416C45.2605 15.0924 44.4909 14.3229 43.5417 14.3229H11.4584C10.5091 14.3229 9.73962 15.0924 9.73962 16.0416C9.73962 16.9909 10.5091 17.7604 11.4584 17.7604H43.5417C44.4909 17.7604 45.2605 16.9909 45.2605 16.0416Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 38.9583C45.2605 38.0091 44.4909 37.2395 43.5417 37.2395H11.4584C10.5091 37.2395 9.73962 38.0091 9.73962 38.9583C9.73962 39.9075 10.5091 40.677 11.4584 40.677H43.5417C44.4909 40.677 45.2605 39.9075 45.2605 38.9583Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I184:934;75:124"
                  style={{"marginLeft":103,"marginRight":26,"flexGrow":1,"marginTop":140,"marginBottom":14,"color":"rgba(232, 113, 33, 1)","fontSize":20,"fontWeight":800,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"italic","lineHeight":"128.00000190734863%","letterSpacing":"0.4px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Order Takeout</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I184:934;154:935"
                  style={{"marginLeft":296,"marginRight":-63,"flexGrow":1,"marginTop":65,"marginBottom":89}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0303 8.53033C11.3232 8.23744 11.3232 7.76256 11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967L5.96967 11.4697C5.82322 11.6161 5.75 11.8081 5.75 12C5.75 12.1017 5.77024 12.1987 5.80691 12.2871C5.84351 12.3755 5.89776 12.4584 5.96967 12.5303L9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303C11.3232 16.2374 11.3232 15.7626 11.0303 15.4697L8.31066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H8.31066L11.0303 8.53033Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="184:980"
            style={{"marginLeft":38,"width":300,"minWidth":300,"height":null,"marginTop":-701,"marginBottom":671,"minHeight":30,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CSearchBar {...this.props} nodeId="184:980" />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="184:986"
            style={{"marginLeft":290,"width":57,"minWidth":57,"height":null,"marginTop":-660,"marginBottom":636,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">2 results</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="184:1013"
            style={{"marginLeft":30,"width":315,"minWidth":315,"height":null,"marginTop":-632,"marginBottom":391,"minHeight":241,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="184:1003"
                  style={{"marginLeft":0,"width":315,"minWidth":315,"height":null,"marginTop":22,"marginBottom":165,"minHeight":54,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="184:984"
                        style={{"marginLeft":0,"marginRight":261,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/9399/bbb0/7ee146664235170751abd8c3abb89375)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="184:985"
                        style={{"marginLeft":74,"marginRight":166,"flexGrow":1,"marginTop":14,"marginBottom":16,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Chick-Fil-A</span>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":2}} className="outerDiv centerer">
                      <div
                        id="184:1044"
                        style={{"marginLeft":215,"marginRight":30,"flexGrow":1,"marginTop":11,"marginBottom":5.741943359375,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <CSelectButton {...this.props} nodeId="184:1044" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv">
                <div
                  id="184:1004"
                  style={{"marginLeft":0,"width":315,"minWidth":315,"height":null,"marginTop":-143,"marginBottom":89,"minHeight":54,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I184:1004;184:984"
                        style={{"marginLeft":0,"marginRight":261,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/9399/bbb0/7ee146664235170751abd8c3abb89375)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I184:1004;184:985"
                        style={{"marginLeft":74,"marginRight":166,"flexGrow":1,"marginTop":14,"marginBottom":16,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Chick-Fil-A</span>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":2}} className="outerDiv centerer">
                      <div
                        id="I184:1004;184:1044"
                        style={{"marginLeft":215,"marginRight":30,"flexGrow":1,"marginTop":11,"marginBottom":5.741943359375,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <CSelectButton {...this.props} nodeId="I184:1004;184:1044" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv">
                <div
                  id="184:933"
                  style={{"marginLeft":0,"width":313,"minWidth":313,"height":null,"marginTop":-67,"marginBottom":22,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I184:933;48:120"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I184:933;48:120;37:8"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                              className="innerDiv"
                            >
                              <div>
                                <div style={{}} className="outerDiv centerer">
                                  <div
                                    id="I184:933;48:120;37:8;37:5"
                                    style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":1}} className="outerDiv centerer">
                                  <div
                                    id="I184:933;48:120;37:8;37:6"
                                    style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.73681640625,"marginBottom":4.73687744140625,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":2}} className="outerDiv centerer">
                                  <div
                                    id="I184:933;48:120;37:8;37:7"
                                    style={{"marginLeft":83.7952880859375,"marginRight":83.7952880859375,"flexGrow":1,"marginTop":10.39471435546875,"marginBottom":10.60528564453125,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                      <span style={{}} key="end">View All</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":4}} className="outerDiv">
                <div
                  id="184:996"
                  style={{"marginLeft":0,"width":314.0255126953125,"minWidth":314.0255126953125,"marginTop":0,"marginBottom":0,"height":null}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="184:1183"
                  style={{"width":"99.69063895089286%","marginLeft":"0%","height":"0%","top":"0%"}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="184:1014"
            style={{"marginLeft":13,"width":350,"minWidth":350,"height":null,"marginTop":-373,"marginBottom":97,"minHeight":276,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CLargeTextBox {...this.props} nodeId="184:1014" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="184:935"
            style={{"marginLeft":31,"width":313,"minWidth":313,"height":null,"marginTop":-74,"marginBottom":29,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:935;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I184:935;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I184:935;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I184:935;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.736846923828125,"marginBottom":4.736846923828125,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I184:935;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.7952880859375,"flexGrow":1,"marginTop":10.394744873046875,"marginBottom":10.605255126953125,"color":"rgba(232, 113, 33, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Submit</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CLargeTextBox184D1063 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:1063;184:998"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I184:1063;184:999"
            style={{"marginLeft":16,"marginRight":191,"flexGrow":1,"marginTop":23,"marginBottom":217,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">  Type note here:</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I184:1063;184:1000"
            style={{"marginLeft":20,"marginRight":22,"flexGrow":1,"marginTop":61,"marginBottom":47,"border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I184:1063;184:1001"
            style={{"marginLeft":218,"marginRight":26,"flexGrow":1,"marginTop":229,"marginBottom":23,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"italic","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">0 of 1000 characters</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CNewNote184D1052 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="184:1053"
            style={{"marginLeft":26,"width":257,"minWidth":257,"height":null,"marginTop":-12,"marginBottom":646,"minHeight":178,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:1053;75:115"
                  style={{"marginLeft":79,"marginRight":0,"flexGrow":1,"marginTop":9,"marginBottom":-9,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I184:1053;75:115;44:50"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/523d/9d54/14d689c195210d72d7832f0be8c28f87)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I184:1053;75:116"
                  style={{"marginLeft":0,"marginRight":202,"flexGrow":1,"marginTop":57,"marginBottom":66}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 27.5C45.2605 26.5507 44.4909 25.7812 43.5417 25.7812H11.4584C10.5091 25.7812 9.73962 26.5507 9.73962 27.5C9.73962 28.4492 10.5091 29.2187 11.4584 29.2187H43.5417C44.4909 29.2187 45.2605 28.4492 45.2605 27.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 16.0416C45.2605 15.0924 44.4909 14.3229 43.5417 14.3229H11.4584C10.5091 14.3229 9.73962 15.0924 9.73962 16.0416C9.73962 16.9909 10.5091 17.7604 11.4584 17.7604H43.5417C44.4909 17.7604 45.2605 16.9909 45.2605 16.0416Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 38.9583C45.2605 38.0091 44.4909 37.2395 43.5417 37.2395H11.4584C10.5091 37.2395 9.73962 38.0091 9.73962 38.9583C9.73962 39.9075 10.5091 40.677 11.4584 40.677H43.5417C44.4909 40.677 45.2605 39.9075 45.2605 38.9583Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I184:1053;75:124"
                  style={{"marginLeft":121,"marginRight":43,"flexGrow":1,"marginTop":140,"marginBottom":14,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"128.00000190734863%","letterSpacing":"0.4px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">New Note</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I184:1053;154:935"
                  style={{"marginLeft":296,"marginRight":-63,"flexGrow":1,"marginTop":65,"marginBottom":89}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0303 8.53033C11.3232 8.23744 11.3232 7.76256 11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967L5.96967 11.4697C5.82322 11.6161 5.75 11.8081 5.75 12C5.75 12.1017 5.77024 12.1987 5.80691 12.2871C5.84351 12.3755 5.89776 12.4584 5.96967 12.5303L9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303C11.3232 16.2374 11.3232 15.7626 11.0303 15.4697L8.31066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H8.31066L11.0303 8.53033Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="184:1063"
            style={{"marginLeft":14,"width":350,"minWidth":350,"height":null,"marginTop":-616,"marginBottom":340,"minHeight":276,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CLargeTextBox {...this.props} nodeId="184:1063" />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="184:1100"
            style={{"marginLeft":-367,"width":314.0255126953125,"minWidth":314.0255126953125,"marginTop":-324,"marginBottom":324,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="184:1054"
            style={{"marginLeft":31,"width":313,"minWidth":313,"height":null,"marginTop":-304,"marginBottom":259,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:1054;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I184:1054;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I184:1054;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I184:1054;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.73681640625,"marginBottom":4.73687744140625,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I184:1054;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.795166015625,"flexGrow":1,"marginTop":10.39471435546875,"marginBottom":10.60528564453125,"color":"rgba(232, 113, 33, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Submit</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CRecipeCategoryPage75D113 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="103:173"
            style={{"marginLeft":22,"width":257,"minWidth":257,"height":null,"marginTop":-17,"marginBottom":651,"minHeight":178,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="75:115"
                  style={{"marginLeft":79,"marginRight":0,"flexGrow":1,"marginTop":9,"marginBottom":-9,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I75:115;44:50"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/523d/9d54/14d689c195210d72d7832f0be8c28f87)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="75:116"
                  style={{"marginLeft":0,"marginRight":202,"flexGrow":1,"marginTop":57,"marginBottom":66}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 27.5C45.2605 26.5507 44.4909 25.7812 43.5417 25.7812H11.4584C10.5091 25.7812 9.73962 26.5507 9.73962 27.5C9.73962 28.4492 10.5091 29.2187 11.4584 29.2187H43.5417C44.4909 29.2187 45.2605 28.4492 45.2605 27.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 16.0417C45.2605 15.0924 44.4909 14.3229 43.5417 14.3229H11.4584C10.5091 14.3229 9.73962 15.0924 9.73962 16.0417C9.73962 16.9909 10.5091 17.7604 11.4584 17.7604H43.5417C44.4909 17.7604 45.2605 16.9909 45.2605 16.0417Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 38.9583C45.2605 38.0091 44.4909 37.2396 43.5417 37.2396H11.4584C10.5091 37.2396 9.73962 38.0091 9.73962 38.9583C9.73962 39.9076 10.5091 40.6771 11.4584 40.6771H43.5417C44.4909 40.6771 45.2605 39.9076 45.2605 38.9583Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="75:124"
                  style={{"marginLeft":79,"marginRight":2,"flexGrow":1,"marginTop":140,"marginBottom":14,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"128.00000190734863%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Low Energy Recipes</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="154:935"
                  style={{"marginLeft":296,"marginRight":-63,"flexGrow":1,"marginTop":65,"marginBottom":89}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0303 8.53033C11.3232 8.23744 11.3232 7.76256 11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967L5.96967 11.4697C5.82322 11.6161 5.75 11.8081 5.75 12C5.75 12.1017 5.77024 12.1987 5.80691 12.2871C5.84351 12.3755 5.89776 12.4584 5.96967 12.5303L9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303C11.3232 16.2374 11.3232 15.7626 11.0303 15.4697L8.31066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H8.31066L11.0303 8.53033Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="75:117"
            style={{"marginLeft":37,"width":313,"minWidth":313,"height":null,"marginTop":-629,"marginBottom":584,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I75:117;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I75:117;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I75:117;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I75:117;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.736846923828125,"marginBottom":4.736846923828125,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I75:117;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.7952880859375,"flexGrow":1,"marginTop":10.394744873046875,"marginBottom":10.605255126953125,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Add New Recipe</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="75:180"
            style={{"marginLeft":25,"width":328,"minWidth":328,"height":null,"marginTop":-503,"marginBottom":388,"minHeight":115,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="75:163"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/47ad/3605/b9ae6ee7c0a3bfa664a26610402a28b6)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="75:164"
                  style={{"marginLeft":0,"marginRight":186,"flexGrow":1,"marginTop":91,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.6700000166893005,"borderRadius":"0px 5px 0px 5px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="75:166"
                  style={{"marginLeft":29,"marginRight":218,"flexGrow":1,"marginTop":91,"marginBottom":0,"color":"rgba(255, 255, 255, 1)","WebkitTextStroke":"1px rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"196.9230842590332%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Veggie Burger</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="103:172"
            style={{"marginLeft":23,"width":330,"minWidth":330,"height":null,"marginTop":-369,"marginBottom":254,"minHeight":115,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="75:174"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/2c4e/5079/8d6cbb4395c55753450b489054d94340)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="75:168"
                  style={{"marginLeft":1,"marginRight":187,"flexGrow":1,"marginTop":91,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.6700000166893005,"borderRadius":"0px 5px 0px 5px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="75:169"
                  style={{"marginLeft":51,"marginRight":240,"flexGrow":1,"marginTop":91,"marginBottom":0,"color":"rgba(255, 255, 255, 1)","WebkitTextStroke":"1px rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"196.9230842590332%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Ravioli</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="75:156"
            style={{"width":"6.4%","marginLeft":"82.13333333333334%","height":"2.955665024630542%","top":"34.23645320197044%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4697 7.53033C13.7626 7.82322 14.2374 7.82322 14.5303 7.53033L15.25 6.81066L15.25 17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17L16.75 6.81066L17.4697 7.53033C17.7626 7.82322 18.2374 7.82322 18.5303 7.53033C18.8232 7.23744 18.8232 6.76256 18.5303 6.46967L16.5303 4.46967C16.2374 4.17678 15.7626 4.17678 15.4697 4.46967L13.4697 6.46967C13.1768 6.76256 13.1768 7.23744 13.4697 7.53033Z" fill="black"/>
<path d="M8.75 17.1893L9.46967 16.4697C9.76256 16.1768 10.2374 16.1768 10.5303 16.4697C10.8232 16.7626 10.8232 17.2374 10.5303 17.5303L8.53033 19.5303C8.23744 19.8232 7.76256 19.8232 7.46967 19.5303L5.46967 17.5303C5.17678 17.2374 5.17678 16.7626 5.46967 16.4697C5.76256 16.1768 6.23744 16.1768 6.53033 16.4697L7.25 17.1893L7.25 7C7.25 6.58579 7.58579 6.25 8 6.25C8.41421 6.25 8.75 6.58579 8.75 7L8.75 17.1893Z" fill="black"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="75:160"
            style={{"width":"6.4%","marginLeft":"75.46666666666667%","height":"2.955665024630542%","top":"34.35960591133005%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9859 5.42367C14.0077 4.97906 9.99236 4.97906 6.01419 5.42367C5.74502 5.45376 5.6154 5.76941 5.78574 5.97998L9.30276 10.3275C10.5627 11.8849 11.25 13.8275 11.25 15.8307V18.7199L12.75 19.8199V15.8307C12.75 13.8275 13.4374 11.8849 14.6973 10.3275L18.2143 5.97998C18.3846 5.76941 18.255 5.45376 17.9859 5.42367ZM5.84758 3.93296C9.93648 3.47596 14.0636 3.47596 18.1525 3.93296C19.5994 4.09467 20.2962 5.79146 19.3805 6.92339L15.8635 11.2709C14.8195 12.5614 14.25 14.1709 14.25 15.8307V21.3C14.25 21.5826 14.0911 21.8413 13.839 21.969C13.5869 22.0968 13.2844 22.0719 13.0565 21.9048L10.0565 19.7048C9.86384 19.5635 9.75002 19.3389 9.75002 19.1V15.8307C9.75002 14.1709 9.18049 12.5614 8.13658 11.2709L4.61956 6.92339C3.70387 5.79146 4.40065 4.09467 5.84758 3.93296Z" fill="black"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv centerer">
          <div
            id="103:174"
            style={{"width":"83.74013671875%","marginLeft":"9.866666666666667%","height":"0%","top":"32.142857142857146%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CSimilarRecipeSlider154D759 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:759;154:479"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":38.9473876953125,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"inset 0px 4px 4px rgba(0, 0, 0, 0.25)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:759;154:679"
            style={{"marginLeft":1.146240234375,"marginRight":223.5203857421875,"flexGrow":1,"marginTop":40.16448974609375,"marginBottom":9.73681640625,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:759;154:680"
                  style={{"width":"100%","marginLeft":"0%","height":"88.33331752096382%","top":"0%","backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:759;154:680;75:175"
                        style={{"marginLeft":9.361083984375,"marginRight":8.5810546875,"flexGrow":1,"marginTop":9.94476318359375,"marginBottom":9.11602783203125,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/b3aa/3065/14a7e8ac844ad40a67bd2d8a59431c37)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I154:759;154:681"
                  style={{"width":"97.1697446847816%","marginLeft":"2.8301466473237813%","height":"11.666682479036186%","top":"88.33331752096382%","color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":700,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Hotdogs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I154:759;154:731"
            style={{"marginLeft":113.4796142578125,"marginRight":112.333251953125,"flexGrow":1,"marginTop":40.16448974609375,"marginBottom":9.73681640625,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:759;154:732"
                  style={{"width":"100%","marginLeft":"0%","height":"88.33331752096382%","top":"0%","backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:759;154:732;75:175"
                        style={{"marginLeft":9.265625,"marginRight":8.493408203125,"flexGrow":1,"marginTop":9.94476318359375,"marginBottom":9.11602783203125,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/c6e6/bb7d/930a7897f39a3084e7304ab0e65dadd6)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I154:759;154:733"
                  style={{"width":"97.16977092699636%","marginLeft":"2.8302290730036397%","height":"11.666682479036186%","top":"88.33331752096382%","color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":700,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Chick-fil-a</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I154:759;154:705"
            style={{"marginLeft":224.666748046875,"marginRight":0,"flexGrow":1,"marginTop":40.16448974609375,"marginBottom":9.73681640625,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:759;154:706"
                  style={{"width":"100%","marginLeft":"0%","height":"88.33331752096382%","top":"0%","backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:759;154:706;75:175"
                        style={{"marginLeft":9.361083984375,"marginRight":8.5810546875,"flexGrow":1,"marginTop":9.94476318359375,"marginBottom":9.11602783203125,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/e90a/139f/6eb3cc1cd1dcd6758a459f12e2bf7c88)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I154:759;154:707"
                  style={{"width":"97.1698502772121%","marginLeft":"2.8301497227879%","height":"11.666682479036186%","top":"88.33331752096382%","color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":700,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Snappers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CNotesBoxFull154D536 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I154:536;154:483"
            style={{"marginLeft":1.8619384765625,"marginRight":0,"flexGrow":1,"marginTop":41.09423828125,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I154:536;154:484"
            style={{"marginLeft":-19.0966796875,"marginRight":266.22998046875,"flexGrow":1,"marginTop":9.8099365234375,"marginBottom":231.2235107421875,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Notes</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I154:536;154:485"
            style={{"marginLeft":119.0733642578125,"marginRight":11.2333984375,"flexGrow":1,"marginTop":1.90716552734375,"marginBottom":221.85614013671875,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:536;154:485;11:119"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":-2.7177734375,"marginBottom":2.7177734375,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:536;154:485;11:119;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I154:536;154:485;11:119;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I154:536;154:485;11:119;37:8;37:6"
                              style={{"marginLeft":13.02001953125,"marginRight":13.02001953125,"flexGrow":1,"marginTop":3.81439208984375,"marginBottom":3.81439208984375,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I154:536;154:485;11:119;37:8;37:7"
                              style={{"marginLeft":55.3353271484375,"marginRight":55.3349609375,"flexGrow":1,"marginTop":5.0076904296875,"marginBottom":7.22900390625,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Add New Note</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I154:536;154:530"
            style={{"marginLeft":21.3433837890625,"marginRight":17.97314453125,"flexGrow":1,"marginTop":60.07659912109375,"marginBottom":26.3687744140625,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:536;154:530;154:525"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I154:536;154:530;154:527"
                  style={{"marginLeft":13.953857421875,"marginRight":9.302734375,"flexGrow":1,"marginTop":53.20654296875,"marginBottom":16.46875,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Myecenas nisi eros, tincidunt vel nibh et, fermentum lacinia massa. Aenean id interdum orci, non accumsan lectus. Curabitur augue nisi, varius non ante ut, condimentum sodales tellus.</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I154:536;154:530;154:528"
                  style={{"marginLeft":224.1927490234375,"marginRight":-0.93017578125,"flexGrow":1,"marginTop":17.73553466796875,"marginBottom":130.482666015625,"color":"rgba(232, 113, 33, 1)","fontSize":12,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">12/3/2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CRecipeIndivPage154D446 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="154:454"
            style={{"marginLeft":22,"width":257,"minWidth":257,"height":null,"marginTop":-17,"marginBottom":1463,"minHeight":178,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:454;75:115"
                  style={{"marginLeft":79,"marginRight":0,"flexGrow":1,"marginTop":9,"marginBottom":-9,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:454;75:115;44:50"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/523d/9d54/14d689c195210d72d7832f0be8c28f87)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I154:454;75:116"
                  style={{"marginLeft":0,"marginRight":202,"flexGrow":1,"marginTop":57,"marginBottom":66}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 27.5C45.2605 26.5507 44.4909 25.7812 43.5417 25.7812H11.4584C10.5091 25.7812 9.73962 26.5507 9.73962 27.5C9.73962 28.4492 10.5091 29.2187 11.4584 29.2187H43.5417C44.4909 29.2187 45.2605 28.4492 45.2605 27.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 16.0417C45.2605 15.0924 44.4909 14.3229 43.5417 14.3229H11.4584C10.5091 14.3229 9.73962 15.0924 9.73962 16.0417C9.73962 16.9909 10.5091 17.7604 11.4584 17.7604H43.5417C44.4909 17.7604 45.2605 16.9909 45.2605 16.0417Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 38.9583C45.2605 38.0091 44.4909 37.2396 43.5417 37.2396H11.4584C10.5091 37.2396 9.73962 38.0091 9.73962 38.9583C9.73962 39.9076 10.5091 40.6771 11.4584 40.6771H43.5417C44.4909 40.6771 45.2605 39.9076 45.2605 38.9583Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I154:454;154:935"
                  style={{"marginLeft":296,"marginRight":-63,"flexGrow":1,"marginTop":65,"marginBottom":89}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0303 8.53033C11.3232 8.23744 11.3232 7.76256 11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967L5.96967 11.4697C5.82322 11.6161 5.75 11.8081 5.75 12C5.75 12.1017 5.77024 12.1987 5.80691 12.2871C5.84351 12.3755 5.89776 12.4584 5.96967 12.5303L9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303C11.3232 16.2374 11.3232 15.7626 11.0303 15.4697L8.31066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H8.31066L11.0303 8.53033Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":11}} className="outerDiv">
          <div
            id="154:827"
            style={{"marginLeft":126,"width":124,"minWidth":124,"height":null,"marginTop":-1501,"marginBottom":1477,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"128.00000190734863%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Veggie Burger</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":9}} className="outerDiv">
          <div
            id="154:535"
            style={{"marginLeft":24,"width":95,"minWidth":95,"height":null,"marginTop":-1462,"marginBottom":1438,"minHeight":24,"color":"rgba(232, 113, 33, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"italic","lineHeight":"128.00000190734863%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Low Energy</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":10}} className="outerDiv">
          <div
            id="154:828"
            style={{"marginLeft":279,"width":59,"minWidth":59,"height":null,"marginTop":-1455,"marginBottom":1431,"minHeight":24,"color":"rgba(196, 196, 196, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"italic","lineHeight":"128.00000190734863%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">10 min</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":16}} className="outerDiv">
          <div
            id="154:784"
            style={{"marginLeft":25,"width":322,"minWidth":322,"height":null,"marginTop":-1414,"marginBottom":1326,"minHeight":88,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/47ad/3605/b9ae6ee7c0a3bfa664a26610402a28b6)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":15}} className="outerDiv">
          <div
            id="154:785"
            style={{"marginLeft":19,"width":337,"minWidth":337,"height":null,"marginTop":-1298,"marginBottom":1113,"minHeight":185,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:785;154:479"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":38.94736862182617,"marginBottom":0.000003814697265625,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"inset 0px 4px 4px rgba(0, 0, 0, 0.25)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I154:785;154:679"
                  style={{"marginLeft":1.146240234375,"marginRight":223.5203857421875,"flexGrow":1,"marginTop":40.16447448730469,"marginBottom":9.736831665039062,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:785;154:680"
                        style={{"width":"100%","marginLeft":"0%","height":"88.33332881551347%","top":"0%","backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I154:785;154:680;75:175"
                              style={{"marginLeft":9.361083984375,"marginRight":8.5810546875,"flexGrow":1,"marginTop":9.944766998291016,"marginBottom":9.116024017333984,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/5c78/4eb2/4e59f0dc4b2812d710b7f37fc5236f9f)","backgroundSize":"cover"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I154:785;154:681"
                        style={{"width":"97.1697446847816%","marginLeft":"2.8301466473237813%","height":"11.66667118448653%","top":"88.33332881551347%","color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":700,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">French Fries</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I154:785;154:731"
                  style={{"marginLeft":113.4796142578125,"marginRight":112.333251953125,"flexGrow":1,"marginTop":40.16447448730469,"marginBottom":9.736831665039062,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:785;154:732"
                        style={{"width":"100%","marginLeft":"0%","height":"88.33332881551347%","top":"0%","backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I154:785;154:732;75:175"
                              style={{"marginLeft":9.265625,"marginRight":8.493408203125,"flexGrow":1,"marginTop":9.944766998291016,"marginBottom":9.116024017333984,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/41ec/27f0/6ba461522a469c34eb46aa31e6ecf5ec)","backgroundSize":"cover"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I154:785;154:733"
                        style={{"width":"97.16977092699636%","marginLeft":"2.8302290730036397%","height":"11.66667118448653%","top":"88.33332881551347%","color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":700,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Chips</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I154:785;154:705"
                  style={{"marginLeft":224.666748046875,"marginRight":0,"flexGrow":1,"marginTop":40.16447448730469,"marginBottom":9.736831665039062,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:785;154:706"
                        style={{"width":"100%","marginLeft":"0%","height":"88.33332881551347%","top":"0%","backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I154:785;154:706;75:175"
                              style={{"marginLeft":9.361083984375,"marginRight":8.5810546875,"flexGrow":1,"marginTop":9.944766998291016,"marginBottom":9.116024017333984,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/54cc/6643/84f7774d50f127e765a1906ca08baeea)","backgroundSize":"cover"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I154:785;154:707"
                        style={{"width":"97.1698502772121%","marginLeft":"2.8301497227879%","height":"11.66667118448653%","top":"88.33332881551347%","color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":700,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Salad</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":17}} className="outerDiv">
          <div
            id="154:826"
            style={{"marginLeft":24,"width":66,"minWidth":66,"height":null,"marginTop":-1287,"marginBottom":1276,"minHeight":11,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":700,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Sides</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":22}} className="outerDiv">
          <div
            id="154:835"
            style={{"marginLeft":207,"width":142,"minWidth":142,"height":null,"marginTop":-1078,"marginBottom":1053,"minHeight":25,"backgroundColor":"rgba(159, 183, 162, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":23}} className="outerDiv">
          <div
            id="154:834"
            style={{"marginLeft":232,"width":117,"minWidth":117,"height":null,"marginTop":-1078,"marginBottom":1054,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":15,"fontWeight":700,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">3/5 in kitchen</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":19}} className="outerDiv">
          <div
            id="154:832"
            style={{"marginLeft":19,"width":94,"minWidth":94,"height":null,"marginTop":-1076,"marginBottom":1052,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"italic","lineHeight":"128.00000190734863%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Ingredients</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":21}} className="outerDiv">
          <div
            id="154:833"
            style={{"marginLeft":32,"width":114,"minWidth":114,"height":null,"marginTop":-1029,"marginBottom":885,"minHeight":144,"color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"196.9230842590332%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{"fontSize":13,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="13">Veggie Burger</span>
              <br key="br13" />
              <span style={{"fontSize":13,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="21">Ketchup</span>
              <br key="br21" />
              <span style={{"fontSize":13,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="27">Bread</span>
              <br key="br27" />
              <span style={{"fontSize":13,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="35">Lettuce</span>
              <br key="br35" />
              <span style={{"fontSize":13,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="50">Cheddar Cheese</span>
              <br key="br50" />
            </div>
          </div>
        </div>
        <div style={{"zIndex":20}} className="outerDiv">
          <div
            id="154:838"
            style={{"marginLeft":21,"width":330,"minWidth":330,"height":null,"marginTop":-867,"marginBottom":817,"minHeight":50,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"italic","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{"fontSize":20,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="5">Steps</span>
              <span style={{}} key="20">               </span>
              <br key="br20" />
              <span style={{"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end">Prep Time:  5 min                           Cook Time: 5 min</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":24}} className="outerDiv">
          <div
            id="154:840"
            style={{"marginLeft":20,"width":338,"minWidth":338,"height":null,"marginTop":-782,"marginBottom":634,"minHeight":148,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"213.3333396911621%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="69">1) liquam ante lacus, luctus non elit nec, commodo dignissim tellus. </span>
              <br key="br69" />
              <span style={{}} key="132">2) Quisque et odio et tellus tincidunt cursus eu sit amet mi. </span>
              <br key="br132" />
              <span style={{}} key="166">3) Morbi tincidunt placerat urna.</span>
              <br key="br166" />
              <span style={{}} key="236">4) liquam ante lacus, luctus non elit nec, commodo dignissim tellus. </span>
              <br key="br236" />
              <span style={{}} key="300">5)  Quisque et odio et tellus tincidunt cursus eu sit amet mi. </span>
              <br key="br300" />
            </div>
          </div>
        </div>
        <div style={{"zIndex":18}} className="outerDiv">
          <div
            id="154:839"
            style={{"marginLeft":22,"width":130,"minWidth":130,"height":null,"marginTop":-594,"marginBottom":583,"minHeight":11,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":700,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Similar Recipes</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":14}} className="outerDiv">
          <div
            id="154:759"
            style={{"marginLeft":21,"width":337,"minWidth":337,"height":null,"marginTop":-588,"marginBottom":403,"minHeight":185,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CSimilarRecipeSlider {...this.props} nodeId="154:759" />
          </div>
        </div>
        <div style={{"zIndex":12}} className="outerDiv">
          <div
            id="154:536"
            style={{"marginLeft":19,"width":337,"minWidth":337,"height":null,"marginTop":-369,"marginBottom":109,"minHeight":260,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CNotesBoxFull {...this.props} nodeId="154:536" />
          </div>
        </div>
        <div style={{"zIndex":13}} className="outerDiv">
          <div
            id="154:841"
            style={{"marginLeft":147,"width":100,"minWidth":100,"height":null,"marginTop":-100,"marginBottom":0,"minHeight":100,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv">
                <div
                  id="154:842"
                  style={{"marginLeft":-49,"width":100,"minWidth":100,"height":null,"marginTop":4,"marginBottom":-4,"minHeight":100,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="154:453"
            style={{"marginLeft":31,"width":313,"minWidth":313,"height":null,"marginTop":-80,"marginBottom":35,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I154:453;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I154:453;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I154:453;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I154:453;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.73681640625,"marginBottom":4.73681640625,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I154:453;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.795166015625,"flexGrow":1,"marginTop":10.394775390625,"marginBottom":10.605224609375,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Add New Recipe</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="154:452"
            style={{"width":"83.74010416666667%","marginLeft":"8.8%","height":"0%","top":"24.199507389162562%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="154:780"
            style={{"width":"83.74010416666667%","marginLeft":"5.866666666666666%","height":"0%","top":"32.758620689655174%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="154:845"
            style={{"width":"83.74010416666667%","marginLeft":"8.533333333333333%","height":"0%","top":"20.073891625615765%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="154:782"
            style={{"width":"83.74010416666667%","marginLeft":"6.4%","height":"0%","top":"76.23152709359606%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="154:843"
            style={{"width":"83.74010416666667%","marginLeft":"6.666666666666667%","height":"0%","top":"62.00738916256157%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv centerer">
          <div
            id="154:836"
            style={{"width":"83.74010416666667%","marginLeft":"6.666666666666667%","height":"0%","top":"45.443349753694584%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CShoppingListHomePage103D200 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="103:202"
            style={{"marginLeft":105,"width":178,"minWidth":178,"height":null,"marginTop":-6,"marginBottom":640,"minHeight":178,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I103:202;44:50"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/523d/9d54/14d689c195210d72d7832f0be8c28f87)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="103:206"
            style={{"marginLeft":145,"width":119,"minWidth":119,"height":null,"marginTop":-676,"marginBottom":652,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"128.00000190734863%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Shopping List</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="227:925"
            style={{"marginLeft":31,"width":313,"minWidth":313,"height":null,"marginTop":-602,"marginBottom":557,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I227:925;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I227:925;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I227:925;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I227:925;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.73681640625,"marginBottom":4.73681640625,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I227:925;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.7952880859375,"flexGrow":1,"marginTop":10.394775390625,"marginBottom":10.605224609375,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">View Old Lists</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="103:210"
            style={{"marginLeft":31,"width":313,"minWidth":313,"height":null,"marginTop":-538,"marginBottom":493,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I103:210;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I103:210;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I103:210;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I103:210;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.73681640625,"marginBottom":4.73681640625,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I103:210;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.7952880859375,"flexGrow":1,"marginTop":10.394775390625,"marginBottom":10.605224609375,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">View Old Lists</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":10}} className="outerDiv">
          <div
            id="184:929"
            style={{"marginLeft":30,"width":314.0255126953125,"minWidth":314.0255126953125,"marginTop":-472,"marginBottom":472,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="138:478"
            style={{"marginLeft":36,"width":314,"minWidth":314,"height":null,"marginTop":-450,"marginBottom":9,"minHeight":441,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I138:478;66:180"
                  style={{"marginLeft":0,"marginRight":37,"flexGrow":1,"marginTop":0,"marginBottom":385,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I138:478;66:180;63:107"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I138:478;66:180;63:108"
                        style={{"marginLeft":14.1666259765625,"marginRight":251.375,"flexGrow":1,"marginTop":18.833251953125,"marginBottom":17.3751220703125}}
                        className="innerDiv"
                      >
                        <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.462506 19.5376C-0.154112 18.921 -0.154112 17.9212 0.462506 17.3046L7.76709 10L0.462506 2.69544C-0.154112 2.07882 -0.154112 1.07908 0.462506 0.462464C1.07912 -0.154155 2.07886 -0.154155 2.69548 0.462464L11.1165 8.88354C11.7332 9.50016 11.7332 10.4999 11.1165 11.1165L2.69548 19.5376C2.07886 20.1542 1.07912 20.1542 0.462506 19.5376Z" fill="black"/>
</svg>
`}} />
                      </div>
                    </div>
                    <div style={{"zIndex":2}} className="outerDiv centerer">
                      <div
                        id="I138:478;66:180;63:109"
                        style={{"marginLeft":52,"marginRight":140,"flexGrow":1,"marginTop":16,"marginBottom":16,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Refrigerator</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I138:478;66:204"
                  style={{"marginLeft":0,"marginRight":37,"flexGrow":1,"marginTop":71,"marginBottom":314,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I138:478;66:204;63:107"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I138:478;66:204;63:108"
                        style={{"marginLeft":14.1666259765625,"marginRight":251.375,"flexGrow":1,"marginTop":18.833251953125,"marginBottom":17.3751220703125}}
                        className="innerDiv"
                      >
                        <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.462506 19.5376C-0.154112 18.921 -0.154112 17.9212 0.462506 17.3046L7.76709 10L0.462506 2.69544C-0.154112 2.07882 -0.154112 1.07908 0.462506 0.462464C1.07912 -0.154155 2.07886 -0.154155 2.69548 0.462464L11.1165 8.88354C11.7332 9.50016 11.7332 10.4999 11.1165 11.1165L2.69548 19.5376C2.07886 20.1542 1.07912 20.1542 0.462506 19.5376Z" fill="black"/>
</svg>
`}} />
                      </div>
                    </div>
                    <div style={{"zIndex":2}} className="outerDiv centerer">
                      <div
                        id="I138:478;66:204;63:109"
                        style={{"marginLeft":52,"marginRight":172,"flexGrow":1,"marginTop":16,"marginBottom":16,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Freezer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I138:478;66:208"
                  style={{"marginLeft":0,"marginRight":37,"flexGrow":1,"marginTop":142,"marginBottom":243,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I138:478;66:208;63:107"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I138:478;66:208;63:108"
                        style={{"marginLeft":14.1666259765625,"marginRight":251.375,"flexGrow":1,"marginTop":18.833251953125,"marginBottom":17.3751220703125}}
                        className="innerDiv"
                      >
                        <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.462506 19.5376C-0.154112 18.921 -0.154112 17.9212 0.462506 17.3046L7.76709 10L0.462506 2.69544C-0.154112 2.07882 -0.154112 1.07908 0.462506 0.462464C1.07912 -0.154155 2.07886 -0.154155 2.69548 0.462464L11.1165 8.88354C11.7332 9.50016 11.7332 10.4999 11.1165 11.1165L2.69548 19.5376C2.07886 20.1542 1.07912 20.1542 0.462506 19.5376Z" fill="black"/>
</svg>
`}} />
                      </div>
                    </div>
                    <div style={{"zIndex":2}} className="outerDiv centerer">
                      <div
                        id="I138:478;66:208;63:109"
                        style={{"marginLeft":52,"marginRight":149,"flexGrow":1,"marginTop":16,"marginBottom":16,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Dry Goods</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I138:478;66:212"
                  style={{"marginLeft":0,"marginRight":37,"flexGrow":1,"marginTop":213,"marginBottom":172,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I138:478;66:212;63:107"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I138:478;66:212;63:108"
                        style={{"marginLeft":14.1666259765625,"marginRight":251.375,"flexGrow":1,"marginTop":18.833251953125,"marginBottom":17.3751220703125}}
                        className="innerDiv"
                      >
                        <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.462506 19.5376C-0.154112 18.921 -0.154112 17.9212 0.462506 17.3046L7.76709 10L0.462506 2.69544C-0.154112 2.07882 -0.154112 1.07908 0.462506 0.462464C1.07912 -0.154155 2.07886 -0.154155 2.69548 0.462464L11.1165 8.88354C11.7332 9.50016 11.7332 10.4999 11.1165 11.1165L2.69548 19.5376C2.07886 20.1542 1.07912 20.1542 0.462506 19.5376Z" fill="black"/>
</svg>
`}} />
                      </div>
                    </div>
                    <div style={{"zIndex":2}} className="outerDiv centerer">
                      <div
                        id="I138:478;66:212;63:109"
                        style={{"marginLeft":52,"marginRight":139,"flexGrow":1,"marginTop":16,"marginBottom":16,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Condiments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":4}} className="outerDiv centerer">
                <div
                  id="I138:478;74:297"
                  style={{"marginLeft":0,"marginRight":5,"flexGrow":1,"marginTop":284,"marginBottom":104,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I138:478;74:297;154:863"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/3f1a/41ca/62701428bc95d36b78943e9734afd535)","border":"1px solid rgba(196, 196, 196, 1)"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":5}} className="outerDiv centerer">
                <div
                  id="I138:478;74:298"
                  style={{"marginLeft":0,"marginRight":5,"flexGrow":1,"marginTop":352,"marginBottom":36,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I138:478;74:298;154:864"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0}}
                        className="innerDiv"
                      >
                        <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="309" height="53" viewBox="0 0 309 53" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="0.5" y="0.5" width="308" height="52" rx="14.5" fill="#24123A"/>
<rect x="0.5" y="0.5" width="308" height="52" rx="14.5" fill="url(#pattern0)"/>
<rect x="0.5" y="0.5" width="308" height="52" rx="14.5" stroke="#C4C4C4"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_0_696" transform="translate(0.312886) scale(0.000623713 0.00363636)"/>
</pattern>
<image id="image0_0_696" width="600" height="275" xlink:href="data:image/jpeg;base64,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ziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp17WDOcWFOvawZziwp15TtnwzEzTbjemN3WYg7+0RbYTsZ004CkNp56ZOVdJQCNxvs1AK4S0TItpDRRAhwkNM0aDgTSUyTS+Bv/8QALBABAAEDAgUDAwUBAQAAAAAAAREAITFBURBhcYHwIJGhQGCxMMHR4fGAUP/aAAgBAQABPyGlc/lvo6wkAS0w7IrUQgWnPtcx+xOfPnz58+fPnz58+fPnz58+fPnz58+fPnz58+fPnz58+fPnz58+fPnz58+fPnz58+fPnz58+fPnz58+f5DXYdkVqIALXn2hc/lvg6wkgycHm/5+uEaoAS1GGwRjnw7tgP7HjE4a7vyOzYDeb/n64BqiJJTpZUCwRkV732U6WVCsE4Fe1/30fPnz58+fPnz58+fn6I+MgsDdXsNTUMNncLSCzQhSURixK6WVnShk3Yhl12g3yjtVPYhm+sq59jHz41oehcLVeKuJ0oAcMmZhC7s1532N7cMbzyzSQQNgoWIEhjZryAocXV0Xtv8AWnz6gSsBq2KhY6H7px+MVZOyTliLU1ImjCzLIjKOG6FH8MZzQzqXkCqFWEITbh8bv8UfNjU4NYySTJPAetnsQByAaVfV55vUboECkVik3awFJ2RI+jkZypImnuLYIL2xb48okKqYlxccwSZPo/LVfSCyCJzF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"/>
</defs>
</svg>
`}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="103:203"
            style={{"width":"14.666666666666666%","marginLeft":"6.933333333333334%","height":"6.773399014778325%","top":"6.280788177339901%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 27.5C45.2605 26.5507 44.4909 25.7812 43.5417 25.7812H11.4584C10.5091 25.7812 9.73962 26.5507 9.73962 27.5C9.73962 28.4492 10.5091 29.2187 11.4584 29.2187H43.5417C44.4909 29.2187 45.2605 28.4492 45.2605 27.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 16.0416C45.2605 15.0924 44.4909 14.3229 43.5417 14.3229H11.4584C10.5091 14.3229 9.73962 15.0924 9.73962 16.0416C9.73962 16.9909 10.5091 17.7604 11.4584 17.7604H43.5417C44.4909 17.7604 45.2605 16.9909 45.2605 16.0416Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 38.9583C45.2605 38.0091 44.4909 37.2395 43.5417 37.2395H11.4584C10.5091 37.2395 9.73962 38.0091 9.73962 38.9583C9.73962 39.9075 10.5091 40.677 11.4584 40.677H43.5417C44.4909 40.677 45.2605 39.9075 45.2605 38.9583Z" fill="black"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="103:205"
            style={{"width":"6.4%","marginLeft":"28%","height":"2.955665024630542%","top":"16.748768472906406%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6023 18.636C11.7302 18.7128 11.8671 18.7468 12 18.7451C12.1329 18.7468 12.2698 18.7128 12.3977 18.636L13.533 17.9549C15.7595 16.619 18.4825 16.4008 20.8933 17.3651C21.7826 17.7208 22.75 17.0659 22.75 16.1081V4.44918C22.75 3.87123 22.3981 3.35151 21.8615 3.13686C18.7564 1.89483 15.2492 2.17585 12.3815 3.89647L12 4.12539L11.6185 3.89647C8.75077 2.17585 5.24357 1.89483 2.13848 3.13686C1.60187 3.35151 1.25 3.87123 1.25 4.44918V16.1081C1.25 17.0659 2.21739 17.7208 3.10672 17.3651C5.51752 16.4008 8.24052 16.619 10.467 17.9549L11.6023 18.636ZM2.75 4.50801V15.8948C5.54579 14.8468 8.67179 15.1285 11.2388 16.6686L11.25 16.6754V5.42467L10.8467 5.18271C8.39774 3.71332 5.40634 3.46498 2.75 4.50801ZM12.7612 16.6686L12.75 16.6754V5.42467L13.1533 5.18271C15.6023 3.71332 18.5937 3.46498 21.25 4.50801V15.8948C18.4542 14.8468 15.3282 15.1285 12.7612 16.6686Z" fill="black"/>
<path d="M9.27516 19.0423C7.2513 17.8617 4.7487 17.8617 2.72484 19.0423L2.6221 19.1022C2.26431 19.3109 2.14346 19.7701 2.35217 20.1279C2.56088 20.4857 3.02011 20.6066 3.3779 20.3979L3.48065 20.3379C5.03746 19.4298 6.96254 19.4298 8.51935 20.3379L9.60661 20.9722C11.0856 21.8349 12.9144 21.8349 14.3934 20.9722L15.4806 20.3379C17.0375 19.4298 18.9625 19.4298 20.5194 20.3379L20.6221 20.3979C20.9799 20.6066 21.4391 20.4857 21.6478 20.1279C21.8565 19.7701 21.7357 19.3109 21.3779 19.1022L21.2752 19.0423C19.2513 17.8617 16.7487 17.8617 14.7248 19.0423L13.6376 19.6765C12.6257 20.2668 11.3743 20.2668 10.3624 19.6765L9.27516 19.0423Z" fill="black"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":9}} className="outerDiv centerer">
          <div
            id="154:390"
            style={{"width":"6.4%","marginLeft":"78.66666666666667%","height":"2.955665024630542%","top":"8.12807881773399%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0303 8.53033C11.3232 8.23744 11.3232 7.76256 11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967L5.96967 11.4697C5.82322 11.6161 5.75 11.8081 5.75 12C5.75 12.1017 5.77024 12.1987 5.80691 12.2871C5.84351 12.3755 5.89776 12.4584 5.96967 12.5303L9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303C11.3232 16.2374 11.3232 15.7626 11.0303 15.4697L8.31066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H8.31066L11.0303 8.53033Z" fill="black"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class COldShoppingList184D898 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:898;184:892"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:898;184:892;154:913"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I184:898;184:892;154:914"
                  style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/9bfc/9af6/cbae989923232ead19ed3cd8e4abb616)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I184:898;184:892;154:915"
                  style={{"marginLeft":115,"marginRight":77,"flexGrow":1,"marginTop":13,"marginBottom":60,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">12/23/2021</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I184:898;184:892;154:916"
                  style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":58,"marginBottom":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="45"># of items:                                12</span>
                    <br key="br45" />
                    <span style={{}} key="89">Total Price:                               </span>
                    <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end">$145.90</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class COldShoppingList184D904 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:904;184:892"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:904;184:892;154:913"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I184:904;184:892;154:914"
                  style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/9bfc/9af6/cbae989923232ead19ed3cd8e4abb616)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I184:904;184:892;154:915"
                  style={{"marginLeft":115,"marginRight":77,"flexGrow":1,"marginTop":13,"marginBottom":60,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">12/15/2021</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I184:904;184:892;154:916"
                  style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":58,"marginBottom":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="45"># of items:                                12</span>
                    <br key="br45" />
                    <span style={{}} key="89">Total Price:                               </span>
                    <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end">$145.90</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class COldShoppingList184D910 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:910;184:892"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:910;184:892;154:913"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I184:910;184:892;154:914"
                  style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/9bfc/9af6/cbae989923232ead19ed3cd8e4abb616)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I184:910;184:892;154:915"
                  style={{"marginLeft":115,"marginRight":77,"flexGrow":1,"marginTop":13,"marginBottom":60,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">11/2/2021</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I184:910;184:892;154:916"
                  style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":58,"marginBottom":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="45"># of items:                                12</span>
                    <br key="br45" />
                    <span style={{}} key="89">Total Price:                               </span>
                    <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end">$145.90</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class COldShoppingList184D916 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:916;184:892"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:916;184:892;154:913"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I184:916;184:892;154:914"
                  style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/9bfc/9af6/cbae989923232ead19ed3cd8e4abb616)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I184:916;184:892;154:915"
                  style={{"marginLeft":115,"marginRight":77,"flexGrow":1,"marginTop":13,"marginBottom":60,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">10/12/2021</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I184:916;184:892;154:916"
                  style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":58,"marginBottom":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="45"># of items:                                12</span>
                    <br key="br45" />
                    <span style={{}} key="89">Total Price:                               </span>
                    <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end">$145.90</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class COldShoppingList184D1297 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:1297;184:892"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:1297;184:892;154:913"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I184:1297;184:892;154:914"
                  style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/9bfc/9af6/cbae989923232ead19ed3cd8e4abb616)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I184:1297;184:892;154:915"
                  style={{"marginLeft":115,"marginRight":77,"flexGrow":1,"marginTop":13,"marginBottom":60,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">10/12/2021</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I184:1297;184:892;154:916"
                  style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":58,"marginBottom":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="45"># of items:                                12</span>
                    <br key="br45" />
                    <span style={{}} key="89">Total Price:                               </span>
                    <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end">$145.90</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class COldShoppingList184D1346 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:1346;184:892"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:1346;184:892;154:913"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I184:1346;184:892;154:914"
                  style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/9bfc/9af6/cbae989923232ead19ed3cd8e4abb616)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I184:1346;184:892;154:915"
                  style={{"marginLeft":115,"marginRight":77,"flexGrow":1,"marginTop":13,"marginBottom":60,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">10/12/2021</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I184:1346;184:892;154:916"
                  style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":58,"marginBottom":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="45"># of items:                                12</span>
                    <br key="br45" />
                    <span style={{}} key="89">Total Price:                               </span>
                    <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end">$145.90</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class COldShoppingList184D1352 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:1352;184:892"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:1352;184:892;154:913"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I184:1352;184:892;154:914"
                  style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/9bfc/9af6/cbae989923232ead19ed3cd8e4abb616)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I184:1352;184:892;154:915"
                  style={{"marginLeft":115,"marginRight":77,"flexGrow":1,"marginTop":13,"marginBottom":60,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">10/12/2021</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I184:1352;184:892;154:916"
                  style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":58,"marginBottom":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="45"># of items:                                12</span>
                    <br key="br45" />
                    <span style={{}} key="89">Total Price:                               </span>
                    <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end">$145.90</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class COldShoppingList184D1303 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I184:1303;184:892"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:1303;184:892;154:913"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I184:1303;184:892;154:914"
                  style={{"marginLeft":10,"marginRight":253,"flexGrow":1,"marginTop":13,"marginBottom":14,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/9bfc/9af6/cbae989923232ead19ed3cd8e4abb616)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I184:1303;184:892;154:915"
                  style={{"marginLeft":115,"marginRight":77,"flexGrow":1,"marginTop":13,"marginBottom":60,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":800,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">10/12/2021</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I184:1303;184:892;154:916"
                  style={{"marginLeft":115,"marginRight":0,"flexGrow":1,"marginTop":58,"marginBottom":24,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":500,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="45"># of items:                                12</span>
                    <br key="br45" />
                    <span style={{}} key="89">Total Price:                               </span>
                    <span style={{"fontWeight":700,"fontFamily":"Lato","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end">$145.90</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CShoppingList184D922 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="184:898"
            style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":0,"marginBottom":826,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <COldShoppingList {...this.props} nodeId="184:898" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="184:904"
            style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-816,"marginBottom":708,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <COldShoppingList {...this.props} nodeId="184:904" />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="184:910"
            style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-698,"marginBottom":590,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <COldShoppingList {...this.props} nodeId="184:910" />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="184:916"
            style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-580,"marginBottom":472,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <COldShoppingList {...this.props} nodeId="184:916" />
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="184:1297"
            style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-462,"marginBottom":354,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <COldShoppingList {...this.props} nodeId="184:1297" />
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="184:1346"
            style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-344,"marginBottom":236,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <COldShoppingList {...this.props} nodeId="184:1346" />
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="184:1352"
            style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-226,"marginBottom":118,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <COldShoppingList {...this.props} nodeId="184:1352" />
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="184:1303"
            style={{"marginLeft":0,"width":350,"minWidth":350,"height":null,"marginTop":-108,"marginBottom":0,"minHeight":108,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <COldShoppingList {...this.props} nodeId="184:1303" />
          </div>
        </div>
      </div>
    );
  }
}

class CShoppingListOldLists144D490 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="144:492"
            style={{"marginLeft":90,"width":178,"minWidth":178,"height":null,"marginTop":-23,"marginBottom":657,"minHeight":178,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I144:492;44:50"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/523d/9d54/14d689c195210d72d7832f0be8c28f87)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="144:496"
            style={{"marginLeft":126,"width":119,"minWidth":119,"height":null,"marginTop":-682,"marginBottom":658,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"128.00000190734863%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Shopping List</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="144:495"
            style={{"marginLeft":103,"width":24,"minWidth":24,"height":null,"marginTop":-681,"marginBottom":657,"minHeight":24,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="144:497"
            style={{"marginLeft":31,"width":313,"minWidth":313,"height":null,"marginTop":-640,"marginBottom":595,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I144:497;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I144:497;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I144:497;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I144:497;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.73681640625,"marginBottom":4.73681640625,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I144:497;48:120;37:8;37:7"
                              style={{"marginLeft":83.7952880859375,"marginRight":83.7952880859375,"flexGrow":1,"marginTop":10.394775390625,"marginBottom":10.605224609375,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Upload Receipts</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="184:922"
            style={{"marginLeft":13,"width":350,"minWidth":350,"height":null,"marginTop":-563,"marginBottom":-371,"minHeight":934,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CShoppingList {...this.props} nodeId="184:922" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="144:493"
            style={{"width":"14.666666666666666%","marginLeft":"6.933333333333334%","height":"6.773399014778325%","top":"4.187192118226601%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 27.5C45.2605 26.5507 44.4909 25.7812 43.5417 25.7812H11.4584C10.5091 25.7812 9.73962 26.5507 9.73962 27.5C9.73962 28.4492 10.5091 29.2187 11.4584 29.2187H43.5417C44.4909 29.2187 45.2605 28.4492 45.2605 27.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 16.0416C45.2605 15.0924 44.4909 14.3229 43.5417 14.3229H11.4584C10.5091 14.3229 9.73962 15.0924 9.73962 16.0416C9.73962 16.9909 10.5091 17.7604 11.4584 17.7604H43.5417C44.4909 17.7604 45.2605 16.9909 45.2605 16.0416Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2605 38.9583C45.2605 38.0091 44.4909 37.2395 43.5417 37.2395H11.4584C10.5091 37.2395 9.73962 38.0091 9.73962 38.9583C9.73962 39.9075 10.5091 40.677 11.4584 40.677H43.5417C44.4909 40.677 45.2605 39.9075 45.2605 38.9583Z" fill="black"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv centerer">
          <div
            id="144:525"
            style={{"width":"6.4%","marginLeft":"80.8%","height":"2.955665024630542%","top":"5.911330049261084%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0303 8.53033C11.3232 8.23744 11.3232 7.76256 11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967L5.96967 11.4697C5.82322 11.6161 5.75 11.8081 5.75 12C5.75 12.1017 5.77024 12.1987 5.80691 12.2871C5.84351 12.3755 5.89776 12.4584 5.96967 12.5303L9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303C11.3232 16.2374 11.3232 15.7626 11.0303 15.4697L8.31066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H8.31066L11.0303 8.53033Z" fill="black"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CAddNewRecipe184D1195 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="184:1196"
            style={{"marginLeft":26,"width":257,"minWidth":257,"height":null,"marginTop":-12,"marginBottom":646,"minHeight":178,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:1196;75:115"
                  style={{"marginLeft":79,"marginRight":0,"flexGrow":1,"marginTop":9,"marginBottom":-9,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I184:1196;75:115;44:50"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/523d/9d54/14d689c195210d72d7832f0be8c28f87)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I184:1196;75:116"
                  style={{"marginLeft":0,"marginRight":202,"flexGrow":1,"marginTop":57,"marginBottom":66}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2603 27.5C45.2603 26.5507 44.4908 25.7812 43.5416 25.7812H11.4583C10.509 25.7812 9.7395 26.5507 9.7395 27.5C9.7395 28.4492 10.509 29.2187 11.4583 29.2187H43.5416C44.4908 29.2187 45.2603 28.4492 45.2603 27.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2603 16.0416C45.2603 15.0924 44.4908 14.3229 43.5416 14.3229H11.4583C10.509 14.3229 9.7395 15.0924 9.7395 16.0416C9.7395 16.9909 10.509 17.7604 11.4583 17.7604H43.5416C44.4908 17.7604 45.2603 16.9909 45.2603 16.0416Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2603 38.9583C45.2603 38.0091 44.4908 37.2395 43.5416 37.2395H11.4583C10.509 37.2395 9.7395 38.0091 9.7395 38.9583C9.7395 39.9075 10.509 40.677 11.4583 40.677H43.5416C44.4908 40.677 45.2603 39.9075 45.2603 38.9583Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I184:1196;75:124"
                  style={{"marginLeft":113,"marginRight":35,"flexGrow":1,"marginTop":140,"marginBottom":14,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"128.00000190734863%","letterSpacing":"0.4px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">New Recipe</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I184:1196;154:935"
                  style={{"marginLeft":296,"marginRight":-63,"flexGrow":1,"marginTop":65,"marginBottom":89}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0303 8.53033C11.3232 8.23744 11.3232 7.76256 11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967L5.96967 11.4697C5.82322 11.6161 5.75 11.8081 5.75 12C5.75 12.1017 5.77024 12.1987 5.80691 12.2871C5.84351 12.3755 5.89776 12.4584 5.96967 12.5303L9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303C11.3232 16.2374 11.3232 15.7626 11.0303 15.4697L8.31066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H8.31066L11.0303 8.53033Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="184:1218"
            style={{"marginLeft":38,"width":102,"minWidth":102,"height":null,"marginTop":-637,"marginBottom":613,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":700,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"142.22222328186035%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Auto Upload</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="184:1232"
            style={{"marginLeft":37,"width":277,"minWidth":277,"height":null,"marginTop":-601,"marginBottom":547,"minHeight":54,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="184:1216"
                  style={{"marginLeft":1,"marginRight":148,"flexGrow":1,"marginTop":0,"marginBottom":30,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Type url (optional) </span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="184:1228"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":32,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="184:1217"
            style={{"marginLeft":37,"width":277,"minWidth":277,"height":null,"marginTop":-569,"marginBottom":547,"minHeight":22,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="184:1221"
            style={{"marginLeft":31,"width":313,"minWidth":313,"height":null,"marginTop":-519,"marginBottom":474,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:1221;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I184:1221;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I184:1221;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I184:1221;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.73681640625,"marginBottom":4.73687744140625,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I184:1221;48:120;37:8;37:7"
                              style={{"marginLeft":83.795166015625,"marginRight":83.79541015625,"flexGrow":1,"marginTop":10.39471435546875,"marginBottom":10.60528564453125,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Scan (optional)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="184:1227"
            style={{"marginLeft":39,"width":122,"minWidth":122,"height":null,"marginTop":-438,"marginBottom":414,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":700,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"142.22222328186035%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Manual Upload</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="184:1233"
            style={{"marginLeft":39,"width":277,"minWidth":277,"height":null,"marginTop":-402,"marginBottom":348,"minHeight":54,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:1233;184:1216"
                  style={{"marginLeft":1,"marginRight":178,"flexGrow":1,"marginTop":0,"marginBottom":30,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Recipe Name:</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I184:1233;184:1228"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":32,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":9}} className="outerDiv">
          <div
            id="184:1236"
            style={{"marginLeft":41,"width":277,"minWidth":277,"height":null,"marginTop":-336,"marginBottom":282,"minHeight":54,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:1236;184:1216"
                  style={{"marginLeft":1,"marginRight":200,"flexGrow":1,"marginTop":0,"marginBottom":30,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Prep Time:</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I184:1236;184:1228"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":32,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(196, 196, 196, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="184:1199"
            style={{"marginLeft":-367,"width":314.025390625,"minWidth":314.025390625,"marginTop":-324,"marginBottom":324,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="184:1197"
            style={{"marginLeft":31,"width":313,"minWidth":313,"height":null,"marginTop":-206,"marginBottom":161,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I184:1197;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I184:1197;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I184:1197;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I184:1197;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.73681640625,"marginBottom":4.73687744140625,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I184:1197;48:120;37:8;37:7"
                              style={{"marginLeft":83.795166015625,"marginRight":83.79541015625,"flexGrow":1,"marginTop":10.39471435546875,"marginBottom":10.60528564453125,"color":"rgba(232, 113, 33, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Submit</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CMenuSetup226D779 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="226:780"
            style={{"marginLeft":26,"width":257,"minWidth":257,"height":null,"marginTop":-12,"marginBottom":646,"minHeight":178,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I226:780;75:115"
                  style={{"marginLeft":79,"marginRight":0,"flexGrow":1,"marginTop":9,"marginBottom":-9,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I226:780;75:115;44:50"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/523d/9d54/14d689c195210d72d7832f0be8c28f87)","backgroundSize":"cover"}}
                        className="innerDiv"
                      >
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="I226:780;75:116"
                  style={{"marginLeft":0,"marginRight":202,"flexGrow":1,"marginTop":57,"marginBottom":66}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2603 27.5C45.2603 26.5507 44.4908 25.7812 43.5416 25.7812H11.4583C10.509 25.7812 9.7395 26.5507 9.7395 27.5C9.7395 28.4492 10.509 29.2187 11.4583 29.2187H43.5416C44.4908 29.2187 45.2603 28.4492 45.2603 27.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2603 16.0416C45.2603 15.0924 44.4908 14.3229 43.5416 14.3229H11.4583C10.509 14.3229 9.7395 15.0924 9.7395 16.0416C9.7395 16.9909 10.509 17.7604 11.4583 17.7604H43.5416C44.4908 17.7604 45.2603 16.9909 45.2603 16.0416Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2603 38.9583C45.2603 38.0091 44.4908 37.2395 43.5416 37.2395H11.4583C10.509 37.2395 9.7395 38.0091 9.7395 38.9583C9.7395 39.9075 10.509 40.677 11.4583 40.677H43.5416C44.4908 40.677 45.2603 39.9075 45.2603 38.9583Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="I226:780;75:124"
                  style={{"marginLeft":111,"marginRight":34,"flexGrow":1,"marginTop":140,"marginBottom":14,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"128.00000190734863%","letterSpacing":"0.4px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Menu Setup</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":3}} className="outerDiv centerer">
                <div
                  id="I226:780;154:935"
                  style={{"marginLeft":296,"marginRight":-63,"flexGrow":1,"marginTop":65,"marginBottom":89}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0303 8.53033C11.3232 8.23744 11.3232 7.76256 11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967L5.96967 11.4697C5.82322 11.6161 5.75 11.8081 5.75 12C5.75 12.1017 5.77024 12.1987 5.80691 12.2871C5.84351 12.3755 5.89776 12.4584 5.96967 12.5303L9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303C11.3232 16.2374 11.3232 15.7626 11.0303 15.4697L8.31066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H8.31066L11.0303 8.53033Z" fill="black"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="226:932"
            style={{"marginLeft":44,"width":280,"minWidth":280,"height":null,"marginTop":-641,"marginBottom":592,"minHeight":49,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv">
                <div
                  id="226:950"
                  style={{"marginLeft":-15,"width":311,"minWidth":311,"height":null,"marginTop":0,"marginBottom":24,"minHeight":25,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv">
                      <div
                        id="226:923"
                        style={{"marginLeft":0,"width":280,"minWidth":280,"height":null,"marginTop":0,"marginBottom":0,"minHeight":25,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I226:923;226:879"
                              style={{"marginLeft":0,"marginRight":96,"flexGrow":1,"marginTop":0,"marginBottom":1,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">How many meals per day?</span>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I226:923;226:889"
                              style={{"marginLeft":205,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                              className="innerDiv"
                            >
                              <div>
                                <div style={{}} className="outerDiv centerer">
                                  <div
                                    id="I226:923;226:889;226:880"
                                    style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":1,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(0, 0, 0, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":1}} className="outerDiv centerer">
                                  <div
                                    id="I226:923;226:889;226:881"
                                    style={{"marginLeft":33,"marginRight":32,"flexGrow":1,"marginTop":0,"marginBottom":2,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                      <span style={{}} key="end">1</span>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":2}} className="outerDiv centerer">
                                  <div
                                    id="I226:923;226:889;226:884"
                                    style={{"marginLeft":46,"marginRight":5,"flexGrow":1,"marginTop":1,"marginBottom":0}}
                                    className="innerDiv"
                                  >
                                    <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z" fill="black"/>
</svg>
`}} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="226:948"
                        style={{"width":"6.430868167202572%","marginLeft":"93.56913183279742%","height":"80%","top":"0%"}}
                        className="innerDiv"
                      >
                        <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99992 8.95837C10.3451 8.95837 10.6249 9.2382 10.6249 9.58337V13.75C10.6249 14.0952 10.3451 14.375 9.99992 14.375C9.65474 14.375 9.37492 14.0952 9.37492 13.75V9.58337C9.37492 9.2382 9.65474 8.95837 9.99992 8.95837Z" fill="#C4C4C4"/>
<path d="M9.99992 7.50004C10.4602 7.50004 10.8333 7.12694 10.8333 6.66671C10.8333 6.20647 10.4602 5.83337 9.99992 5.83337C9.53968 5.83337 9.16658 6.20647 9.16658 6.66671C9.16658 7.12694 9.53968 7.50004 9.99992 7.50004Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.70825 10C2.70825 5.97296 5.97284 2.70837 9.99992 2.70837C14.027 2.70837 17.2916 5.97296 17.2916 10C17.2916 14.0271 14.027 17.2917 9.99992 17.2917C5.97284 17.2917 2.70825 14.0271 2.70825 10ZM9.99992 3.95837C6.6632 3.95837 3.95825 6.66332 3.95825 10C3.95825 13.3368 6.6632 16.0417 9.99992 16.0417C13.3366 16.0417 16.0416 13.3368 16.0416 10C16.0416 6.66332 13.3366 3.95837 9.99992 3.95837Z" fill="#C4C4C4"/>
</svg>
`}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="226:947"
            style={{"marginLeft":29,"width":318,"minWidth":318,"height":null,"marginTop":-599,"marginBottom":551,"minHeight":48,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv">
                <div
                  id="226:933"
                  style={{"marginLeft":0,"width":287,"minWidth":287,"height":null,"marginTop":0,"marginBottom":0,"minHeight":48,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I226:933;226:911"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":24,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">How long do you want to eat each meal?</span>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="I226:933;226:913"
                        style={{"marginLeft":0,"marginRight":94,"flexGrow":1,"marginTop":31,"marginBottom":-8,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I226:933;226:913;226:903"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                              className="innerDiv"
                            >
                              <div>
                                <div style={{}} className="outerDiv centerer">
                                  <div
                                    id="I226:933;226:913;226:904"
                                    style={{"width":"100%","marginLeft":"0%","height":"92%","top":"4%","backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(0, 0, 0, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":1}} className="outerDiv centerer">
                                  <div
                                    id="I226:933;226:913;226:908"
                                    style={{"width":"23.83419689119171%","marginLeft":"13.989637305699482%","height":"96%","top":"0%","color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                      <span style={{}} key="end">3 days</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I226:933;226:913;226:900"
                              style={{"marginLeft":160,"marginRight":9,"flexGrow":1,"marginTop":1,"marginBottom":0}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z" fill="black"/>
</svg>
`}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="226:945"
                  style={{"width":"6.289308176100629%","marginLeft":"93.71069182389937%","height":"41.666666666666664%","top":"0%"}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99992 8.95837C10.3451 8.95837 10.6249 9.2382 10.6249 9.58337V13.75C10.6249 14.0952 10.3451 14.375 9.99992 14.375C9.65474 14.375 9.37492 14.0952 9.37492 13.75V9.58337C9.37492 9.2382 9.65474 8.95837 9.99992 8.95837Z" fill="#C4C4C4"/>
<path d="M9.99992 7.50004C10.4602 7.50004 10.8333 7.12694 10.8333 6.66671C10.8333 6.20647 10.4602 5.83337 9.99992 5.83337C9.53968 5.83337 9.16658 6.20647 9.16658 6.66671C9.16658 7.12694 9.53968 7.50004 9.99992 7.50004Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.70825 10C2.70825 5.97296 5.97284 2.70837 9.99992 2.70837C14.027 2.70837 17.2916 5.97296 17.2916 10C17.2916 14.0271 14.027 17.2917 9.99992 17.2917C5.97284 17.2917 2.70825 14.0271 2.70825 10ZM9.99992 3.95837C6.6632 3.95837 3.95825 6.66332 3.95825 10C3.95825 13.3368 6.6632 16.0417 9.99992 16.0417C13.3366 16.0417 16.0416 13.3368 16.0416 10C16.0416 6.66332 13.3366 3.95837 9.99992 3.95837Z" fill="#C4C4C4"/>
</svg>
`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="226:958"
            style={{"marginLeft":44,"width":280,"minWidth":280,"height":null,"marginTop":-529,"marginBottom":480,"minHeight":49,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv">
                <div
                  id="226:959"
                  style={{"marginLeft":-15,"width":366,"minWidth":366,"height":null,"marginTop":0,"marginBottom":24,"minHeight":25,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv">
                      <div
                        id="226:960"
                        style={{"marginLeft":0,"width":335,"minWidth":335,"height":null,"marginTop":0,"marginBottom":0,"minHeight":25,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I226:960;226:879"
                              style={{"marginLeft":0,"marginRight":96,"flexGrow":1,"marginTop":0,"marginBottom":1,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">How many options for each meal?</span>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I226:960;226:889"
                              style={{"marginLeft":260,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                              className="innerDiv"
                            >
                              <div>
                                <div style={{}} className="outerDiv centerer">
                                  <div
                                    id="I226:960;226:889;226:880"
                                    style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":1,"backgroundColor":"rgba(255, 255, 255, 1)","border":"0.5px solid rgba(0, 0, 0, 1)"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":1}} className="outerDiv centerer">
                                  <div
                                    id="I226:960;226:889;226:881"
                                    style={{"marginLeft":33,"marginRight":32,"flexGrow":1,"marginTop":0,"marginBottom":2,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":600,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"160%","letterSpacing":"0px"}}
                                    className="innerDiv"
                                  >
                                    <div>
                                      <span style={{}} key="end">1</span>
                                    </div>
                                  </div>
                                </div>
                                <div style={{"zIndex":2}} className="outerDiv centerer">
                                  <div
                                    id="I226:960;226:889;226:884"
                                    style={{"marginLeft":46,"marginRight":5,"flexGrow":1,"marginTop":1,"marginBottom":0}}
                                    className="innerDiv"
                                  >
                                    <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z" fill="black"/>
</svg>
`}} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="226:961"
                        style={{"width":"5.46448087431694%","marginLeft":"94.53551912568307%","height":"80%","top":"0%"}}
                        className="innerDiv"
                      >
                        <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99992 8.95837C10.3451 8.95837 10.6249 9.2382 10.6249 9.58337V13.75C10.6249 14.0952 10.3451 14.375 9.99992 14.375C9.65474 14.375 9.37492 14.0952 9.37492 13.75V9.58337C9.37492 9.2382 9.65474 8.95837 9.99992 8.95837Z" fill="#C4C4C4"/>
<path d="M9.99992 7.50004C10.4602 7.50004 10.8333 7.12694 10.8333 6.66671C10.8333 6.20647 10.4602 5.83337 9.99992 5.83337C9.53968 5.83337 9.16658 6.20647 9.16658 6.66671C9.16658 7.12694 9.53968 7.50004 9.99992 7.50004Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.70825 10C2.70825 5.97296 5.97284 2.70837 9.99992 2.70837C14.027 2.70837 17.2916 5.97296 17.2916 10C17.2916 14.0271 14.027 17.2917 9.99992 17.2917C5.97284 17.2917 2.70825 14.0271 2.70825 10ZM9.99992 3.95837C6.6632 3.95837 3.95825 6.66332 3.95825 10C3.95825 13.3368 6.6632 16.0417 9.99992 16.0417C13.3366 16.0417 16.0416 13.3368 16.0416 10C16.0416 6.66332 13.3366 3.95837 9.99992 3.95837Z" fill="#C4C4C4"/>
</svg>
`}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="226:781"
            style={{"marginLeft":31,"width":313,"minWidth":313,"height":null,"marginTop":-453,"marginBottom":408,"minHeight":45,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I226:781;48:120"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="I226:781;48:120;37:8"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="I226:781;48:120;37:8;37:5"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="I226:781;48:120;37:8;37:6"
                              style={{"marginLeft":19.716552734375,"marginRight":19.716552734375,"flexGrow":1,"marginTop":4.73681640625,"marginBottom":4.73687744140625,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="I226:781;48:120;37:8;37:7"
                              style={{"marginLeft":83.795166015625,"marginRight":83.79541015625,"flexGrow":1,"marginTop":10.39471435546875,"marginBottom":10.60528564453125,"color":"rgba(232, 113, 33, 1)","fontSize":15,"fontWeight":600,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"170.66665649414062%","letterSpacing":"0px"}}
                              className="innerDiv"
                            >
                              <div>
                                <span style={{}} key="end">Submit</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="226:783"
            style={{"marginLeft":-367,"width":314.025390625,"minWidth":314.025390625,"marginTop":-324,"marginBottom":324,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="315" height="1" viewBox="0 0 315 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="314.025" y2="0.5" stroke="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CLogo227D843 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="227:844"
            style={{"marginLeft":53,"width":110,"minWidth":110,"height":null,"marginTop":0,"marginBottom":1,"minHeight":110}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="55" cy="55" r="54" fill="#E87121" stroke="#FCFCFC" stroke-width="2"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="227:845"
            style={{"marginLeft":0,"width":213,"minWidth":213,"height":null,"marginTop":-96,"marginBottom":0,"minHeight":96,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I227:845;41:15"
                  style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/455a/c320/35f0178ad5672a0487965663f820dd23)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CStatusBar217D1061 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"justifyContent":"flex-end"}} className="outerDiv">
          <div
            id="217:1063"
            style={{"marginRight":17.00311279296875,"width":22,"minWidth":22,"height":null,"marginTop":17.3333740234375,"marginBottom":15.333251953125,"minHeight":11.3333740234375,"border":"1px solid rgba(24, 23, 37, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2,"justifyContent":"flex-end"}} className="outerDiv">
          <div
            id="217:1065"
            style={{"marginRight":19.00311279296875,"width":18,"minWidth":18,"height":null,"marginTop":-24.6666259765625,"marginBottom":17.333251953125,"minHeight":7.3333740234375,"backgroundColor":"rgba(24, 23, 37, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1,"justifyContent":"flex-end"}} className="outerDiv">
          <div
            id="217:1064"
            style={{"marginRight":14.675048828125,"width":1.32806396484375,"minWidth":1.32806396484375,"height":null,"marginTop":-23,"marginBottom":19,"minHeight":4}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="2" height="4" viewBox="0 0 2 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M0 0V4C0.804731 3.66122 1.32804 2.87313 1.32804 2C1.32804 1.12687 0.804731 0.338777 0 0Z" fill="#181725"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="217:1066"
            style={{"width":"4.072622444051978%","marginLeft":"84.18499455815063%","height":"24.921764026988637%","top":"39.38792835582387%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66064 2.28448C9.8835 2.28457 12.0214 3.13868 13.6324 4.67028C13.7537 4.78852 13.9476 4.78703 14.0671 4.66693L15.2267 3.4966C15.2872 3.43569 15.3209 3.35318 15.3204 3.26733C15.3199 3.18148 15.2852 3.09937 15.224 3.03917C10.9957 -1.01306 4.32494 -1.01306 0.0965755 3.03917C0.0353243 3.09933 0.00057143 3.18141 6.99545e-06 3.26726C-0.000557917 3.35311 0.033112 3.43565 0.0935658 3.4966L1.25354 4.66693C1.37294 4.78721 1.567 4.7887 1.68823 4.67028C3.29944 3.13858 5.43755 2.28447 7.66064 2.28448ZM7.66064 6.09206C8.88196 6.09198 10.0597 6.54594 10.965 7.36571C11.0875 7.48205 11.2803 7.47953 11.3997 7.36003L12.558 6.1897C12.619 6.12831 12.6529 6.04503 12.652 5.9585C12.6511 5.87196 12.6156 5.78939 12.5533 5.72926C9.79648 3.16485 5.52714 3.16485 2.77029 5.72926C2.70802 5.78939 2.67249 5.872 2.67167 5.95857C2.67086 6.04513 2.70482 6.1284 2.76595 6.1897L3.92391 7.36003C4.04328 7.47953 4.23616 7.48205 4.35861 7.36571C5.26332 6.54648 6.44013 6.09256 7.66064 6.09206ZM9.98014 8.65389C9.98191 8.74067 9.9478 8.82434 9.88587 8.88513L7.88259 10.9071C7.82386 10.9666 7.7438 11 7.66026 11C7.57672 11 7.49666 10.9666 7.43793 10.9071L5.43432 8.88513C5.37242 8.82429 5.33837 8.7406 5.34021 8.65382C5.34204 8.56704 5.3796 8.48487 5.44401 8.4267C6.72338 7.34443 8.59714 7.34443 9.87651 8.4267C9.94087 8.48491 9.97837 8.56712 9.98014 8.65389Z" fill="#181725"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv centerer">
          <div
            id="217:1070"
            style={{"width":"4.533198047997974%","marginLeft":"78.3111175346689%","height":"24.242331764914773%","top":"40.15142267400568%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0001 0H15.0003C14.4481 0 14.0004 0.447725 14.0004 1.00002V9.66687C14.0004 10.2192 14.4481 10.6669 15.0003 10.6669H16.0001C16.5523 10.6669 17 10.2192 17 9.66687V1.00002C17 0.447725 16.5523 0 16.0001 0ZM10.3335 2.33338H11.3333C11.8856 2.33338 12.3332 2.78111 12.3332 3.33341V9.66688C12.3332 10.2192 11.8856 10.6669 11.3333 10.6669H10.3335C9.78126 10.6669 9.33361 10.2192 9.33361 9.66688V3.33341C9.33361 2.78111 9.78126 2.33338 10.3335 2.33338ZM6.66651 4.66677H5.66665C5.11444 4.66677 4.66679 5.11449 4.66679 5.66679V9.66687C4.66679 10.2192 5.11444 10.6669 5.66665 10.6669H6.66651C7.21871 10.6669 7.66636 10.2192 7.66636 9.66687V5.66679C7.66636 5.11449 7.21871 4.66677 6.66651 4.66677ZM1.99976 6.66681H0.999879C0.447662 6.66681 0 7.11453 0 7.66683V9.66687C0 10.2192 0.447662 10.6669 0.999879 10.6669H1.99976C2.55198 10.6669 2.99964 10.2192 2.99964 9.66687V7.66683C2.99964 7.11453 2.55198 6.66681 1.99976 6.66681Z" fill="#181725"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv centerer">
          <div
            id="217:1075"
            style={{"width":"14.400010676994706%","marginLeft":"5.600002343730545%","height":"47.72727272727273%","top":"20.454545454545453%","backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{"alignItems":"center"}} className="outerDiv centerer">
                <div
                  id="217:1076"
                  style={{"marginLeft":0,"marginRight":0.00048828125,"flexGrow":1,"height":18,"marginTop":3,"color":"rgba(24, 23, 37, 1)","fontSize":14,"fontWeight":500,"fontFamily":"Montserrat","textAlign":"CENTER","fontStyle":"normal","lineHeight":"137.14284896850586%","letterSpacing":"-0.2800000011920929px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">9:41</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CSigninPage217D1005 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":12}} className="outerDiv">
          <div
            id="217:1019"
            style={{"marginLeft":-392.79750061035156,"width":1071.7265625,"minWidth":1071.7265625,"height":null,"marginTop":-449.087890625,"marginBottom":81.391357421875,"minHeight":1179.696533203125,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/ec6f/adb5/c1b9e1ea1e2fb78dff79130bd5d602cf)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="217:1011"
            style={{"marginLeft":-71.417724609375,"width":684.053466796875,"minWidth":684.053466796875,"height":null,"marginTop":-1219.05126953125,"marginBottom":849.4599609375,"minHeight":369.59130859375,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/db4e/58fa/c23dd6eaeefc5f9b23a040409692e76a)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="217:1010"
            style={{"marginLeft":-29.7044677734375,"width":684.053466796875,"minWidth":684.053466796875,"height":null,"marginTop":-948.491943359375,"marginBottom":578.900634765625,"minHeight":369.59130859375,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/db4e/58fa/c23dd6eaeefc5f9b23a040409692e76a)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":11}} className="outerDiv">
          <div
            id="217:1018"
            style={{"marginLeft":0,"width":399,"minWidth":399,"height":null,"marginTop":-819,"marginBottom":403.5494384765625,"minHeight":415.4505615234375,"backgroundColor":"rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="217:1007"
            style={{"marginLeft":0.469970703125,"width":413.826904296875,"minWidth":413.826904296875,"height":null,"marginTop":-812,"marginBottom":-84,"minHeight":896,"backgroundColor":"rgba(196, 196, 196, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="217:1012"
            style={{"marginLeft":0.29345703125,"width":414.600341796875,"minWidth":414.600341796875,"height":null,"marginTop":-812,"marginBottom":578.9005126953125,"minHeight":233.0994873046875,"backgroundColor":"rgba(252, 252, 252, 1)","opacity":0.6000000238418579}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":36}} className="outerDiv">
          <div
            id="227:843"
            style={{"marginLeft":81,"width":213,"minWidth":213,"height":null,"marginTop":-651,"marginBottom":540,"minHeight":111,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CLogo {...this.props} nodeId="227:843" />
          </div>
        </div>
        <div style={{"zIndex":33}} className="outerDiv">
          <div
            id="217:1045"
            style={{"marginLeft":25,"width":228,"minWidth":228,"height":null,"marginTop":-376,"marginBottom":317,"minHeight":59,"color":"rgba(3, 3, 3, 1)","fontSize":20,"fontWeight":900,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"154.66666221618652%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="18">Fix your kitchen, </span>
              <br key="br18" />
              <span style={{}} key="end">simplify your life</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":29}} className="outerDiv">
          <div
            id="217:1042"
            style={{"marginLeft":78.50518798828125,"width":25,"minWidth":25,"height":null,"marginTop":-292.59185791015625,"marginBottom":266.7786865234375,"minHeight":25.81317138671875,"color":"rgba(3, 3, 3, 1)","fontSize":18,"fontWeight":500,"fontFamily":"Montserrat","textAlign":"CENTER","fontStyle":"normal","lineHeight":"171.85186386108398%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">+1</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":30}} className="outerDiv">
          <div
            id="217:1043"
            style={{"marginLeft":26,"width":30.23541259765625,"minWidth":30.23541259765625,"height":null,"marginTop":-291.8323974609375,"marginBottom":270.739501953125,"minHeight":21.0928955078125,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/80b3/ffc6/6b789096952e79eef117e58ed1559854)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":31}} className="outerDiv">
          <div
            id="217:1044"
            style={{"marginLeft":26,"width":324,"minWidth":324,"marginTop":-257.38787841796875,"marginBottom":257.38787841796875,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="324" height="1" viewBox="0 0 324 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.5L324 0.500028" stroke="#E2E2E2"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="217:1016"
            style={{"marginLeft":0.47003173828125,"width":413.82696533203125,"minWidth":413.82696533203125,"height":null,"marginTop":-218.7601318359375,"marginBottom":-84.00003051757812,"minHeight":302.7601623535156,"backgroundColor":"rgba(254, 254, 254, 1)","opacity":0.550000011920929}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":34}} className="outerDiv">
          <div
            id="217:1046"
            style={{"marginLeft":97,"width":182,"minWidth":182,"height":null,"marginTop":-215.21478271484375,"marginBottom":198.21478271484375,"minHeight":17,"color":"rgba(130, 130, 130, 1)","fontSize":14,"fontWeight":900,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Or connect with social media</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":22}} className="outerDiv">
          <div
            id="217:1032"
            style={{"marginLeft":36,"width":300,"minWidth":300,"height":null,"marginTop":-168.017578125,"marginBottom":118.017578125,"minHeight":50,"backgroundColor":"rgba(83, 131, 236, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":24}} className="outerDiv">
          <div
            id="217:1035"
            style={{"marginLeft":100,"width":176.2257080078125,"minWidth":176.2257080078125,"height":null,"marginTop":-151.53680419921875,"marginBottom":138.07525634765625,"minHeight":13.4615478515625,"color":"rgba(252, 252, 252, 1)","fontSize":14,"fontWeight":900,"fontFamily":"Lato","textAlign":"CENTER","fontStyle":"normal","lineHeight":"137.14284896850586%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Continue with Google</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":16}} className="outerDiv">
          <div
            id="217:1026"
            style={{"marginLeft":36,"width":300,"minWidth":300,"height":null,"marginTop":-100.74957275390625,"marginBottom":50.74957275390625,"minHeight":50,"backgroundColor":"rgba(74, 102, 172, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":19}} className="outerDiv">
          <div
            id="217:1029"
            style={{"marginLeft":113,"width":199.12939453125,"minWidth":199.12939453125,"height":null,"marginTop":-86.07958984375,"marginBottom":73.57470703125,"minHeight":12.5048828125,"color":"rgba(252, 252, 252, 1)","fontSize":14,"fontWeight":900,"fontFamily":"Lato","textAlign":"LEFT","fontStyle":"normal","lineHeight":"137.14284896850586%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Continue with Facebook</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="217:1015"
            style={{"marginLeft":0.46990966796875,"width":414.00006103515625,"minWidth":414.00006103515625,"height":null,"marginTop":-83.648193359375,"marginBottom":-84.30117797851562,"minHeight":167.94937133789062,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/db4e/58fa/c23dd6eaeefc5f9b23a040409692e76a)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":14}} className="outerDiv">
          <div
            id="217:1020"
            style={{"marginLeft":133,"width":148,"minWidth":148,"height":null,"marginTop":47,"marginBottom":-84,"minHeight":37,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{"zIndex":14}} className="outerDiv maxer">
                <div
                  id="217:1020"
                  style={{"marginLeft":133,"width":"100%","minWidth":148,"height":null,"marginTop":47,"marginBottom":-84,"minHeight":37,"backgroundColor":null,"pointerEvents":"none"}}
                  className="innerDiv"
                >
                  <div style={{"justifyContent":"center"}} className="outerDiv">
                    <div
                      id="217:1021"
                      style={{"width":134,"marginLeft":0,"height":null,"marginTop":24,"marginBottom":8,"minHeight":5,"backgroundColor":"rgba(24, 23, 37, 1)","border":"1px solid rgba(151, 151, 151, 1)"}}
                      className="innerDiv"
                    >
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":15}} className="outerDiv">
          <div
            id="217:1022"
            style={{"marginLeft":133,"width":148,"minWidth":148,"height":null,"marginTop":68,"marginBottom":-84,"minHeight":16,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{"zIndex":15}} className="outerDiv maxer">
                <div
                  id="217:1022"
                  style={{"marginLeft":133,"width":"100%","minWidth":148,"height":null,"marginTop":68,"marginBottom":-84,"minHeight":16,"backgroundColor":null,"pointerEvents":"none"}}
                  className="innerDiv"
                >
                  <div style={{"justifyContent":"center"}} className="outerDiv">
                    <div
                      id="217:1023"
                      style={{"width":134,"marginLeft":0,"height":null,"marginTop":3,"marginBottom":8,"minHeight":5,"backgroundColor":"rgba(24, 23, 37, 1)","border":"1px solid rgba(230, 230, 230, 1)"}}
                      className="innerDiv"
                    >
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":18}} className="outerDiv centerer">
          <div
            id="217:1028"
            style={{"width":"2.7201171875%","marginLeft":"11.202978515625%","height":"2.3989898230641935%","top":"82.09916288629542%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.56081 3.32083H10.4728V0.140833C10.1429 0.0974998 9.00849 0 7.68728 0C4.93054 0 3.0421 1.65583 3.0421 4.69916V7.49999H0V11.055H3.0421V20H6.77186V11.0558H9.69091L10.1543 7.50082H6.77098V5.05166C6.77186 4.02416 7.06158 3.32083 8.56081 3.32083Z" fill="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":26}} className="outerDiv centerer">
          <div
            id="217:1036"
            style={{"width":"5.33095703125%","marginLeft":"9.6%","height":"2.582508707281404%","top":"73.27002163591057%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10.7228C20 9.86028 19.9319 9.2309 19.7846 8.57822H10.2041V12.471H15.8276C15.7143 13.4384 15.102 14.8953 13.7415 15.8743L13.7224 16.0046L16.7516 18.417L16.9614 18.4385C18.8889 16.6086 20 13.9163 20 10.7228Z" fill="white"/>
<path d="M10.2041 20.9794C12.9592 20.9794 15.2721 20.0469 16.9615 18.4385L13.7415 15.8743C12.8799 16.4921 11.7234 16.9233 10.2041 16.9233C7.50574 16.9233 5.2155 15.0935 4.39909 12.5643L4.27942 12.5748L1.12963 15.0806L1.08844 15.1983C2.76643 18.6249 6.21316 20.9794 10.2041 20.9794Z" fill="white"/>
<path d="M4.39906 12.5643C4.18365 11.9117 4.05898 11.2123 4.05898 10.4897C4.05898 9.76703 4.18365 9.06774 4.38773 8.41506L4.38202 8.27605L1.19276 5.72991L1.08841 5.78093C0.396831 7.20289 0 8.79969 0 10.4897C0 12.1797 0.396831 13.7764 1.08841 15.1984L4.39906 12.5643Z" fill="white"/>
<path d="M10.2044 4.05601C12.1205 4.05601 13.413 4.90684 14.15 5.61786L17.0298 2.72733C15.2612 1.03732 12.9595 0 10.2044 0C6.21347 0 2.76673 2.35435 1.08874 5.78097L4.38806 8.4151C5.2158 5.88591 7.50604 4.05601 10.2044 4.05601Z" fill="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":35,"alignItems":"center"}} className="outerDiv centerer">
          <div
            id="217:1061"
            style={{"width":"100.000830078125%","marginLeft":"-0.15392252604166667%","height":44,"marginTop":-842.33251953125,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CStatusBar {...this.props} nodeId="217:1061" />
          </div>
        </div>
      </div>
    );
  }
}

