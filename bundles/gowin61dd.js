function gameload_quick() {
	var n = document.getElementById("allgame"),
		t = n.getAttribute("class");
	t == "wrap-game circle" ? n.setAttribute("class", "wrap-game circle open") : n.setAttribute("class", "wrap-game circle")
}
var ffweb_button = new jBox("Modal", {
		attach: $("#btngame"),
		overlay: !1,
		createOnInit: !1,
		content: $("#allgame"),
		draggable: !0,
		repositionOnOpen: !1,
		closeButton: "overlay",
		closeOnEsc: !1,
		repositionOnContent: !1,
		position: {
			x: "right",
			y: "top"
		},
		offset: {
			x: -460,
			y: 60
		}
	}),
	iconjackpotbutton;
ffweb_button.open();
var openSafe = new jBox("Modal", {
		id: "md_safe",
		attach: $("#open_m_safe"),
		overlay: !0,
		createOnInit: !1,
		content: $("#md_safe"),
		draggable: $(".login-header"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	openSaleGo = new jBox("Modal", {
		id: "md_salego",
		attach: $("#open_m_saleGo"),
		overlay: !0,
		createOnInit: !1,
		content: $("#md_salego"),
		draggable: $(".login-header"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	openAgency = new jBox("Modal", {
		id: "md_agency",
		attach: $("#open_m_agency"),
		overlay: !0,
		createOnInit: !1,
		content: $("#md_agency"),
		draggable: $(".login-header"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	openLogin = new jBox("Modal", {
		id: "md_login",
		attach: $("#open_m_login"),
		overlay: !0,
		createOnInit: !1,
		content: $("#md_login"),
		draggable: $(".login-header"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	openRegister = new jBox("Modal", {
		id: "md_register",
		attach: $("#open_m_register"),
		overlay: !0,
		createOnInit: !1,
		content: $("#md_register"),
		draggable: $(".register-header"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	mdrForgot = new jBox("Modal", {
		id: "messager",
		overlay: !1,
		attach: $("#onreward-Forgot"),
		createOnInit: !1,
		content: $("#md_getpass"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 90
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	mdrGetPass = new jBox("Modal", {
		id: "mrd_GetPass",
		overlay: !1,
		attach: $("#mrd_GetPass"),
		createOnInit: !1,
		content: $("#get_pass"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 90
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	mdrFrmGift = new jBox("Modal", {
		id: "getPassModal",
		overlay: !1,
		attach: $("#attach_pass_modal"),
		createOnInit: !1,
		content: $("#get_pass_modal"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 90
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	openChatRom = new jBox("Modal", {
		id: "myModal_chat",
		attach: $("#icon-openchat"),
		overlay: !1,
		createOnInit: !1,
		content: $("#myModal_chat"),
		draggable: $(".chat-header"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		offset: {
			x: -120,
			y: 255
		},
		position: {
			x: "right",
			y: "top"
		},
		zIndex: 1
	}),
	mdrmessage = new jBox("Modal", {
		id: "messager",
		overlay: !1,
		attach: $("#onreward-message"),
		createOnInit: !1,
		content: $("#reward-message"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: "top"
		},
		zIndex: 1e3,
		offset: {
			y: 120
		},
		closeButton: !0
	}),
	openTransfer = new jBox("Modal", {
		id: "md_transaction",
		attach: $("#open_m_transaction"),
		overlay: !0,
		createOnInit: !1,
		content: $("#md_transaction"),
		draggable: $(".transaction-header"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3
	}),
	iconjackpotbutton = new jBox("Modal", {
		attach: $("#btnjackpot"),
		overlay: !1,
		createOnInit: !1,
		content: $("#minijackpot"),
		repositionOnOpen: !1,
		closeButton: "overlay",
		closeOnEsc: !1,
		repositionOnContent: !1,
		position: {
			x: "left",
			y: "top"
		},
		offset: {
			x: 50,
			y: 90
		}
	});
iconjackpotbutton.open();
iconjackpotbutton = new jBox("Modal", {
	attach: $("#topjackpot"),
	overlay: !1,
	createOnInit: !1,
	content: $("#listtopjackpot"),
	draggable: !0,
	repositionOnOpen: !1,
	closeButton: "overlay",
	closeOnEsc: !1,
	repositionOnContent: !1,
	position: {
		x: "left",
		y: "top"
	},
	offset: {
		x: 100,
		y: 50
	}
});
iconjackpotbutton.open();
var mdVerify = new jBox("Modal", {
		id: "md_security",
		attach: $("#onVerify"),
		overlay: !0,
		createOnInit: !1,
		content: $("#md_security"),
		draggable: $(".recharge-header"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3
	}),
	mdRecharge = new jBox("Modal", {
		id: "md_recharge",
		attach: $("#onrecharge"),
		overlay: !0,
		createOnInit: !1,
		content: $("#md_recharge"),
		draggable: $(".recharge-header"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3
	}),
	mdHelp = new jBox("Modal", {
		id: "mdHelp",
		attach: $("#onHelp"),
		overlay: !0,
		createOnInit: !1,
		content: $("#table-faq_game"),
		draggable: $("#table-faq_game"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3
	}),
	mdSafe = new jBox("Modal", {
		id: "md_safe",
		attach: $("#onmdsafe"),
		overlay: !0,
		createOnInit: !1,
		content: $("#md_safe"),
		draggable: $(".safe-header"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3
	}),
	mdmessage = new jBox("Modal", {
		id: "md_message",
		attach: $("#onmdmessage"),
		overlay: !0,
		createOnInit: !1,
		content: $("#md_message"),
		draggable: $(".message-header"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3
	}),
	mdAlert = new jBox("Modal", {
		id: "myModal_alert",
		overlay: !1,
		createOnInit: !1,
		attach: $("#onAlert"),
		content: $("#myModal_alert"),
		draggable: !1,
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 170
		},
		zIndex: 1e4
	}),
	profile_modal_wp = new jBox("Modal", {
		id: "profile_modal",
		attach: $("#open_profile"),
		overlay: !0,
		createOnInit: !1,
		content: $("#profile_modal"),
		draggable: !1,
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: "center"
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	store_modal_wp = new jBox("Modal", {
		id: "store_modal_id",
		attach: $("#btn_store_modal"),
		overlay: !0,
		createOnInit: !1,
		content: $("#store_modal"),
		draggable: !1,
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: "center"
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	mdChangepass = new jBox("Modal", {
		id: "change_pass",
		attach: $("#onchangepass"),
		overlay: !0,
		createOnInit: !1,
		content: $("#change_pass"),
		draggable: $(".changepass-header"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3
	}),
	mdbailaios = new jBox("Modal", {
		id: "download_file_baila_ios",
		attach: $(".app-block-1"),
		overlay: !0,
		createOnInit: !1,
		content: $("#download_file_baila_ios"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	mdbailaandroid = new jBox("Modal", {
		id: "download_file_baila_android",
		attach: $(".app-block-2"),
		overlay: !0,
		createOnInit: !1,
		content: $("#download_file_baila_android"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	mdcasinoios = new jBox("Modal", {
		id: "download_file_casino_ios",
		attach: $(".app-block-4"),
		overlay: !0,
		createOnInit: !1,
		content: $("#download_file_casino_ios"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	mdcasinoandroid = new jBox("Modal", {
		id: "download_file_casino_android",
		attach: $(".app-block-3"),
		overlay: !0,
		createOnInit: !1,
		content: $("#download_file_casino_android"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: 73
		},
		zIndex: 1e3,
		closeButton: !0
	}),
	tanggo_modal_wp = new jBox("Modal", {
		id: "mdTanggo",
		attach: $("#openTanggo"),
		overlay: !0,
		createOnInit: !1,
		content: $("#tanggo_modal"),
		repositionOnOpen: !1,
		repositionOnContent: !1,
		position: {
			x: "center",
			y: "center"
		},
		zIndex: 1e3,
		closeButton: !0
	});
$(document).ready(function() {
		var n = $("#owl-news");
		n.owlCarousel({
			items: 1,
			navigation: !0,
			dots: !0,
			autoPlay: !1,
			slideSpeed: 600,
			scrollPerPage: !0,
			navigationText: !1
		});
		n = $("#owl-listgame");
		n.owlCarousel({
			items: 5,
			itemsCustom: [
				[0, 5],
				[450, 5],
				[600, 5],
				[700, 5],
				[1e3, 5],
				[1200, 5],
				[1400, 5],
				[1600, 5]
			],
			navigation: !0,
			autoPlay: !1,
			slideSpeed: 600,
			scrollPerPage: !0,
			navigationText: ["<i class='menu-left'>PREV<\/i>", "<i class='menu-right'>NEXT<\/i>"]
		});
		n = $("#owl-rewards");
		n.owlCarousel({
			items: 1,
			itemsCustom: [
				[0, 1],
				[450, 1],
				[600, 1],
				[700, 1],
				[1e3, 1],
				[1200, 1],
				[1400, 1],
				[1600, 1]
			],
			navigation: !0,
			dots: !0,
			autoPlay: !1,
			slideSpeed: 600,
			scrollPerPage: !0,
			navigationText: !1,
			navigationText: ["<i class='menu-left'>PREV<\/i>", "<i class='menu-right'>NEXT<\/i>"]
		});
		n = $("#owl-historygame");
		n.owlCarousel({
			items: 1,
			navigation: !0,
			dots: !0,
			autoPlay: !1,
			slideSpeed: 600,
			scrollPerPage: !0,
			navigationText: !1
		});
		$(".next").click(function() {
			n.trigger("owl.next")
		});
		$(".prev").click(function() {
			n.trigger("owl.prev")
		});
		$(".play").click(function() {
			n.trigger("owl.play", 1e3)
		});
		$(".stop").click(function() {
			n.trigger("owl.stop")
		});
		$(function() {
			$('[data-toggle="tooltip"]').tooltip()
		});
		$(".box-card-detail").hide();
		$(".ondetail").click(function() {
			$(".box-list-card").hide();
			$(".box-card-detail").show()
		});
		$(".minigame-button").click(function() {
			$(".list-minigame").slideToggle("200")
		});
		$(".close-up").click(function() {
			$(".list-minigame").slideToggle("200")
		});
		$("#open_slider_game").click(function() {
			$("#myModal_slide_game").addClass("active")
		});
		$("#close_slider").click(function() {
			$("#myModal_slide_game").removeClass("active")
		});
		$(".onfocus").focus(function() {
			$(this).next(".alert-error").addClass("active")
		});
		$(".onfocus").focusout(function() {
			$(this).next(".alert-error").removeClass("active")
		});
		$("#gametx").draggable();
		$("#popup-taixiuVinhdanh").draggable();
		$("#popup-luatchoi").draggable();
		$("#popup-lichsuTaiXiu").draggable();
		$("#vqmm_content").draggable();
		$("#minipoker").draggable();
		$(".caothap").draggable();
		$("#allgame").draggable();
		$("#minijackpot").draggable();
		$("#gametx input").draggable({
			cancel: null
		})
	}),
	function(n) {
		n(window).on("load", function() {
			n("#chat_scroll").mCustomScrollbar({
				theme: "minimal-dark",
				scrollButtons: {
					enable: !0
				}
			});
			n("#chat_scroll_taixiu").mCustomScrollbar({
				theme: "minimal-dark",
				scrollButtons: {
					enable: !0
				}
			});
			n(".guide_right").mCustomScrollbar({
				theme: "minimal-dark",
				scrollButtons: {
					enable: !0
				}
			});
			n(".table-inner").mCustomScrollbar({
				theme: "minimal-dark",
				scrollButtons: {
					enable: !0
				}
			});
			n("#tab_caothap_huongdan").mCustomScrollbar({
				theme: "minimal-dark",
				scrollButtons: {
					enable: !0
				}
			});
			n(".guide-minigame").mCustomScrollbar({
				theme: "minimal-dark",
				scrollButtons: {
					enable: !0
				}
			})
		})
	}(jQuery);
$(document).ready(function() {
	if(typeof openLuckyWheel!='undefined') Cookies.get("isopenvongquay") === "1" ? openLuckyWheel.open() : openLuckyWheel.close();
	if(typeof play_minipoker!='undefined') Cookies.get("isopenminipoker") === "1" ? play_minipoker.open() : play_minipoker.close();
	if(typeof playcaothap!='undefined') Cookies.get("isopencaothap") === "1" ? playcaothap.open() : playcaothap.close();
	$("#modalgamebc").click(function() {
		Cookies.set("isopenvongquay", 1)
	});
	$("#quayso_close").click(function() {
		Cookies.set("isopenvongquay", 0)
	});
	$("#modalgamepoker").click(function() {
		Cookies.set("isopenminipoker", 1)
	});
	$("#minipoker_close").click(function() {
		Cookies.set("isopenminipoker", 0)
	});
	$("#modalgamesx").click(function() {
		Cookies.set("isopencaothap", 1)
	});
	$("#caothap_close").click(function() {
		Cookies.set("isopencaothap", 0)
	})
})