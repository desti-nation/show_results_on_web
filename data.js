var data_name = ["", "image", "gt", "canny", "hed", "rcf", "bdcn"]
var data_root = ["./",
"/home/lb/edge-detection/data/BSDS500/data/groundTruth/vote_syn/test", 
"/home/lb/edge-detection/canny/results/auto_canny", 
"/home/lb/edge-detection/hed/result/NMS/fuse",
"/home/lb/edge-detection/rcf/result/BSDS500-single/NMS",
"/home/lb/edge-detection/BDCN/result/nms"
] // data root for each method, image, gt, method1, method2, ...
var img_names = [6046, 2018, 3063, 5096] // image names
var nmi = [[1, 2, 3, 4], [5, 6 ,7 ,8], [5, 6 ,7 ,8], [5, 6 ,7 ,8], [5, 6 ,7 ,8], [5, 6 ,7 ,8]]; //[[nmi scores of each image by method1], [nmi scores of each image by method2]]
var pred = [[1, 2, 3, 4], [5, 6 ,7 ,8], [5, 6 ,7 ,8], [5, 6 ,7 ,8], [5, 6 ,7 ,8], [5, 6 ,7 ,8]];