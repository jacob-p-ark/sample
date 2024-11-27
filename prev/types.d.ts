interface Stock {
	stockName: string;
	presentPrice: number;
	priceChange: number;
	priceChangeRate: number;
}

interface Order {
	price: number;
	quantity: number;
}

interface OrderBook {
	currentPrice: number;
	sellOrders: Order[];
	buyOrders: Order[];
}


interface menuListData{
  menuName: string,
  ripple: boolean,
  router: string,
  MenuId: number,
}


interface NewStock {
  stockName: string;
  presentPrice: number;
  priceChange: number;
  priceChangeRate: number;
  currentPrice : boolean;
  decreasePrice : boolean;
  increasePrice : boolean;
}

interface mstData{
  icd:string, /* itm_cod */
  mcd:string, /* mkt_dscd */
  scd:string, /* std_cod */
  iknm:string, /* itm_korn_anm */
  ienm:string, /* itm_eng_anm */
  lsc:string, /* ltg_stk_cn */
  sgid:string, /* scu_grp_id */
  macd:string, /* mkt_alrm_dscd */
  bcd:string, /* blsc_dscd */
  dcsdr:string, /* dss_csh_dpmy_rt */
  tsyn:string, /* trd_stop_yn */
  dldr:string, /* dss_ln_dpmy_rt */
  dcfdr:string /* dss_cfd_dpmy_rt */
}
