import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cow',
	animations: [

	],
	templateUrl: './cow.page.html',
	styleUrls: ['./cow.page.scss'],
})
export class CowPage implements OnInit {
	bookInfo = {
		currentPage: 0,
		maxPages: null,
		pages: null
	}

	constructor() {
	}

	ngOnInit() {
		this.bookInfo.pages = [
			{
				chapter: "All About Cows",
				chapterSub: "The first animal picture I saw online",
				image: "../../assets/images/cow-cover.jpg",
				content: ""
			},
			{
				chapter: "Table of Contents",
				chapterSub: "",
				image: "",
				content: "",
				toc: true
			},
			{
				chapter: "Chapter One",
				chapterSub: "Black and White?",
				image: "",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla sem, tincidunt vel pharetra sed, volutpat faucibus tellus. Ut accumsan, est a auctor condimentum, justo eros malesuada lectus, sit amet bibendum massa augue sit amet justo. In vel sapien ac lectus consectetur finibus sed ut mauris. Donec urna est, lacinia nec nibh ac, iaculis tincidunt quam. Phasellus ornare placerat enim, quis lobortis purus. Etiam venenatis augue eget tempus convallis. Aenean ipsum diam, vulputate eu purus ac, consequat laoreet metus. In consectetur blandit leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean sed tortor lobortis mauris accumsan placerat. Suspendisse sed tortor in mauris elementum dictum ac eget purus. In quis neque nulla. Nullam non purus a sem placerat blandit. Aenean lacinia pretium felis in viverra. Praesent sed tincidunt tellus."
			},
			{
				chapter: "Chapter One",
				chapterSub: "Black and White?",
				image: "../../assets/images/tiger.jpg",
				content: "Sed ut tempor est, ac eleifend magna. Aliquam lacinia eu tellus nec accumsan. Donec cursus mi ipsum, non cursus elit rhoncus at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eu lacus leo. Integer ultricies tortor vel massa sagittis tincidunt. Etiam eget lacus non sem scelerisque facilisis euismod eget arcu. Sed sed tellus sapien. Fusce quis eros ut urna dapibus porta. Praesent sodales ut est eget lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin laoreet justo et pretium rhoncus. Phasellus purus lectus, rhoncus eget finibus nec, venenatis id lorem. Vivamus sit amet massa elit.",
			},
			{
				chapter: "Chapter One",
				chapterSub: "Black and White?",
				image: "",
				content: "Mauris consequat augue vel luctus egestas. Ut at porta sem. Cras lobortis risus eu risus egestas auctor. Etiam diam leo, aliquet ac aliquet ac, congue vitae sem. Cras eu tempor mauris. Curabitur tincidunt lorem non ligula condimentum, eu faucibus ligula convallis. Fusce non tempus dolor. Quisque finibus magna ac ligula sagittis bibendum. Nunc vestibulum neque eu suscipit volutpat. In sit amet enim at tellus scelerisque viverra. Phasellus at elit finibus, fringilla nunc non, molestie ligula. Ut felis ipsum, sodales aliquam mattis sit amet, pharetra eu dolor. Cras non quam id diam sollicitudin vestibulum. Curabitur at tellus accumsan, posuere risus in, mattis ante. Aliquam vestibulum, tellus consectetur pellentesque convallis, mauris neque placerat mauris, in luctus nulla nisl sed felis. Donec lacinia sapien vitae diam tempus, in congue est ornare.",
			},
			{
				chapter: "Chapter One",
				chapterSub: "Black and White?",
				image: "",
				content: "Morbi elit elit, tincidunt vel vulputate et, bibendum ac nisl. Ut non lobortis lorem, non auctor nunc. Duis varius sollicitudin leo id dictum. Mauris dapibus congue maximus. Nunc consequat urna non est fringilla, in efficitur ligula gravida. Morbi ex odio, malesuada sit amet dapibus sit amet, porta eget ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ut scelerisque nisi, a imperdiet tortor. Etiam ornare tellus quis sapien blandit finibus eu ac elit. Donec eu pellentesque neque, quis laoreet risus. Aliquam accumsan consequat tellus, vel viverra augue varius pellentesque. Nullam non viverra magna. Quisque et neque ut ex dignissim placerat. Donec sapien felis, lacinia consequat enim tincidunt, facilisis iaculis purus. Aenean viverra quis arcu nec fringilla. Quisque auctor mauris vitae iaculis luctus.",
			},
			{
				chapter: "Chapter Two",
				chapterSub: "Black and White: Proof of Concept",
				image: "",
				content: "Curabitur tellus ante, ultrices vitae enim et, hendrerit aliquam est. Nunc non libero ante. Pellentesque nec finibus est, nec consectetur sem. Mauris tristique augue eget eros rhoncus, sed hendrerit est accumsan. Mauris eget odio fermentum, interdum augue vel, commodo ipsum. Donec ac mollis ex, iaculis posuere quam. Vivamus ultrices tellus ut sapien ultricies, gravida tincidunt enim placerat. Praesent sit amet ante vitae eros posuere dapibus et sit amet mi. Mauris eget ante at metus hendrerit convallis. Pellentesque ac nisl at turpis hendrerit interdum quis at lorem. Pellentesque eget quam venenatis, tincidunt dolor ut, accumsan lacus. Nullam vestibulum, neque eget efficitur commodo, urna dolor commodo mi, quis mollis purus dui id neque. Morbi condimentum risus dolor, a vulputate leo interdum vitae. Cras eget ornare ligula. Pellentesque sed est eleifend, mattis sem vel, venenatis felis. Fusce sit amet metus iaculis nisl porta vehicula.",
			},
			{
				chapter: "Chapter Two",
				chapterSub: "Black and White: Proof of Concept",
				image: "",
				content: "Cras vitae pharetra mi. Proin condimentum vitae sem eu vulputate. Cras nibh est, tincidunt sed diam et, euismod eleifend tellus. Integer sagittis sapien vel imperdiet iaculis. Integer pretium sollicitudin tempus. Morbi porttitor, libero quis porttitor ultrices, est diam ultricies felis, non iaculis eros libero sit amet nulla. Ut consectetur lobortis nisl id scelerisque. Maecenas nisi ante, tempus id tristique vitae, placerat sit amet lorem. In hac habitasse platea dictumst. Nulla ipsum dolor, sollicitudin aliquet varius sed, molestie vel mi. Donec dictum non lectus ut ullamcorper. Aliquam nibh quam, posuere ac commodo ac, cursus quis risus. Proin fermentum dapibus gravida. Donec quis molestie ipsum, eget lobortis neque.",
			},
			{
				chapter: "Chapter Two",
				chapterSub: "Black and White: Proof of Concept",
				image: "",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla luctus rutrum. Suspendisse et elit semper, pharetra ipsum quis, sagittis sem. Proin tempus rutrum posuere. Phasellus consectetur sit amet nisi et lacinia. Sed rhoncus massa arcu, sed auctor tortor posuere sit amet. Sed in odio nec est hendrerit porttitor. Ut vitae massa ex. Aliquam hendrerit, metus eget commodo varius, diam nunc consequat eros, et semper orci turpis a sem. Duis imperdiet bibendum congue. Phasellus dictum mauris eget ex lacinia gravida. Suspendisse a diam vulputate, vehicula ipsum vel, commodo nibh. Nulla sed elementum mauris.",
			},
			{
				chapter: "Chapter Three",
				chapterSub: "Brown now too?",
				image: "",
				content: "Donec finibus velit et enim aliquet ornare. Mauris ultrices quis nibh at tincidunt. Praesent mollis, mi ac molestie condimentum, urna lacus aliquet eros, vitae condimentum turpis elit et massa. Nullam justo lectus, viverra et blandit a, lobortis quis ipsum. Mauris mi ipsum, iaculis ut enim vel, ultrices pharetra dui. Fusce tristique sapien eget risus imperdiet accumsan. Phasellus sed diam quam. Phasellus sit amet turpis nisi. Sed tempor ipsum augue, ut sagittis ex pulvinar sed. Donec nec suscipit tortor, ac ultrices dui. Nam a porta tortor, at bibendum magna. Maecenas posuere aliquet ex, ut accumsan justo efficitur ac. Aliquam eget lectus hendrerit, rhoncus dolor nec, placerat augue. Vivamus consequat a nisi aliquam tincidunt. Aliquam eget placerat nulla.",
			},
			{
				chapter: "Chapter Three",
				chapterSub: "Brown now too?",
				image: "",
				content: "Cras felis magna, sagittis sed laoreet elementum, pretium quis elit. Donec eu ante cursus diam scelerisque finibus. Vivamus et odio vel orci tristique accumsan vel vel felis. Etiam facilisis egestas mattis. In dignissim bibendum orci eu ullamcorper. Donec imperdiet, tortor interdum consectetur commodo, arcu lectus lobortis nulla, in vulputate nunc leo in dolor. Integer pellentesque faucibus pretium. Donec dignissim lorem vitae pellentesque iaculis. Nunc vel vehicula nisi, sed cursus dolor. Donec vitae turpis rutrum, feugiat lacus sed, convallis dolor. Donec tempor, metus sit amet placerat accumsan, augue augue efficitur tellus, eu eleifend libero neque a tellus. Suspendisse vulputate enim ipsum, vel finibus erat suscipit id.",
			},
			{
				chapter: "About the Author",
				chapterSub: "Moo",
				image: "",
				content: "Donec sed ligula id turpis hendrerit gravida et ac justo. Suspendisse in lectus cursus, molestie justo a, pharetra erat. Ut sagittis efficitur nulla. Donec eu purus quis ante cursus finibus non non quam. Ut congue vestibulum lectus ac pellentesque. Donec viverra, tortor et sollicitudin tempor, ipsum nisi tristique massa, eu malesuada neque enim at diam. Fusce eget velit non lectus cursus accumsan. Proin vulputate, lacus quis eleifend fringilla, metus diam mollis velit, vitae luctus orci diam sit amet erat. Suspendisse sit amet tellus sit amet ipsum sollicitudin convallis sit amet a libero. Donec viverra, urna sit amet tristique congue, felis arcu placerat quam, quis aliquam nisl ex quis est. Nunc vel eros vel purus lobortis viverra. Ut cursus quam non maximus lacinia. Praesent cursus non nunc nec dignissim."
			},
		]
		this.bookInfo.maxPages = 11;
	}

	swipePage(event) {
		// Left
		if(event.direction == 2) {
			this.pageForward();
		}

		// Right
		else if(event.direction == 4) {
			this.pageBackward();
		}

		else {
			return 1;
		}
	}

	pageForward() {
		if(this.bookInfo.currentPage == this.bookInfo.maxPages)
			return 1;

		this.bookInfo.currentPage++;
	}

	pageBackward() {
		if(this.bookInfo.currentPage == 0)
			return 1;

		this.bookInfo.currentPage--;
	}

	setPage(page) {
		this.bookInfo.currentPage = page;
	}
}
