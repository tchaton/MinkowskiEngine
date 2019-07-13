Search.setIndex({docnames:["README","benchmark","broadcast","common","convolution","coords","demo/interop","demo/multigpu","demo/pointnet","demo/segmentation","generalized_sparse_conv","index","issues","nonlinearity","normalization","overview","pooling","quick_start","source/MinkowskiEngine","source/MinkowskiEngine.modules","source/MinkowskiEngine.utils","source/modules","source/setup","source/tests","sparse_tensor","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["README.md","benchmark.md","broadcast.rst","common.rst","convolution.rst","coords.rst","demo/interop.rst","demo/multigpu.md","demo/pointnet.md","demo/segmentation.rst","generalized_sparse_conv.rst","index.rst","issues.md","nonlinearity.rst","normalization.rst","overview.md","pooling.rst","quick_start.md","source/MinkowskiEngine.rst","source/MinkowskiEngine.modules.rst","source/MinkowskiEngine.utils.rst","source/modules.rst","source/setup.rst","source/tests.rst","sparse_tensor.rst","utils.rst"],objects:{"":{MinkowskiEngine:[18,0,0,"-"],tests:[23,0,0,"-"]},"MinkowskiEngine.Common":{KernelGenerator:[18,1,1,""],MinkowskiModuleBase:[18,1,1,""],RegionType:[18,1,1,""],convert_region_type:[18,4,1,""],convert_to_int_list:[18,4,1,""],convert_to_int_tensor:[18,4,1,""],get_kernel_volume:[18,4,1,""],get_postfix:[18,4,1,""],prep_args:[18,4,1,""],save_ctx:[18,4,1,""]},"MinkowskiEngine.Common.KernelGenerator":{get_kernel:[18,2,1,""]},"MinkowskiEngine.Common.RegionType":{CUSTOM:[18,3,1,""],HYBRID:[18,3,1,""],HYPERCROSS:[18,3,1,""],HYPERCUBE:[18,3,1,""]},"MinkowskiEngine.CoordsKey":{__init__:[5,2,1,""],getKey:[5,2,1,""],getTensorStride:[5,2,1,""],setKey:[5,2,1,""],setTensorStride:[5,2,1,""]},"MinkowskiEngine.CoordsManager":{__init__:[5,2,1,""],get_coo_broadcast_coords:[5,2,1,""],get_coords:[5,2,1,""],get_coords_key:[5,2,1,""],get_coords_size_by_coords_key:[5,2,1,""],get_kernel_map:[5,2,1,""],get_mapping_by_coords_key:[5,2,1,""],get_mapping_by_tensor_strides:[5,2,1,""],get_row_indices_per_batch:[5,2,1,""],initialize:[5,2,1,""],initialize_enforce:[5,2,1,""],permute_label:[5,2,1,""]},"MinkowskiEngine.KernelGenerator":{__init__:[3,2,1,""],get_kernel:[3,2,1,""]},"MinkowskiEngine.MinkowskiAvgPooling":{__init__:[16,2,1,""]},"MinkowskiEngine.MinkowskiBatchNorm":{__init__:[14,2,1,""]},"MinkowskiEngine.MinkowskiBroadcast":{AbstractMinkowskiBroadcast:[18,1,1,""],MinkowskiBroadcast:[18,1,1,""],MinkowskiBroadcastAddition:[18,1,1,""],MinkowskiBroadcastConcatenation:[18,1,1,""],MinkowskiBroadcastFunction:[18,1,1,""],MinkowskiBroadcastMultiplication:[18,1,1,""],OperationType:[18,1,1,""],__init__:[2,2,1,""],operation_type_to_int:[18,4,1,""]},"MinkowskiEngine.MinkowskiBroadcast.AbstractMinkowskiBroadcast":{forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiBroadcast.MinkowskiBroadcast":{forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiBroadcast.MinkowskiBroadcastConcatenation":{forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiBroadcast.MinkowskiBroadcastFunction":{backward:[18,2,1,""],forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiBroadcast.OperationType":{ADDITION:[18,3,1,""],MULTIPLICATION:[18,3,1,""]},"MinkowskiEngine.MinkowskiBroadcastAddition":{__init__:[2,2,1,""]},"MinkowskiEngine.MinkowskiBroadcastConcatenation":{__init__:[2,2,1,""]},"MinkowskiEngine.MinkowskiBroadcastMultiplication":{__init__:[2,2,1,""]},"MinkowskiEngine.MinkowskiCELU":{MODULE:[13,3,1,""],__init__:[13,2,1,""]},"MinkowskiEngine.MinkowskiConvolution":{MinkowskiConvolution:[18,1,1,""],MinkowskiConvolutionBase:[18,1,1,""],MinkowskiConvolutionFunction:[18,1,1,""],MinkowskiConvolutionTranspose:[18,1,1,""],MinkowskiConvolutionTransposeFunction:[18,1,1,""],__init__:[4,2,1,""]},"MinkowskiEngine.MinkowskiConvolution.MinkowskiConvolutionBase":{forward:[18,2,1,""],reset_parameters:[18,2,1,""]},"MinkowskiEngine.MinkowskiConvolution.MinkowskiConvolutionFunction":{backward:[18,2,1,""],forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiConvolution.MinkowskiConvolutionTransposeFunction":{backward:[18,2,1,""],forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiConvolutionTranspose":{__init__:[4,2,1,""]},"MinkowskiEngine.MinkowskiCoords":{CoordsKey:[18,1,1,""],CoordsManager:[18,1,1,""],initialize_nthreads:[18,4,1,""]},"MinkowskiEngine.MinkowskiCoords.CoordsKey":{getKey:[18,2,1,""],getTensorStride:[18,2,1,""],setKey:[18,2,1,""],setTensorStride:[18,2,1,""]},"MinkowskiEngine.MinkowskiCoords.CoordsManager":{get_coo_broadcast_coords:[18,2,1,""],get_coords:[18,2,1,""],get_coords_key:[18,2,1,""],get_coords_size_by_coords_key:[18,2,1,""],get_kernel_map:[18,2,1,""],get_mapping_by_coords_key:[18,2,1,""],get_mapping_by_tensor_strides:[18,2,1,""],get_row_indices_per_batch:[18,2,1,""],initialize:[18,2,1,""],initialize_enforce:[18,2,1,""],permute_label:[18,2,1,""]},"MinkowskiEngine.MinkowskiDropout":{MODULE:[13,3,1,""],__init__:[13,2,1,""]},"MinkowskiEngine.MinkowskiFunctional":{relu:[18,4,1,""]},"MinkowskiEngine.MinkowskiGlobalPooling":{__init__:[16,2,1,""]},"MinkowskiEngine.MinkowskiInstanceNorm":{__init__:[14,2,1,""],reset_parameters:[14,2,1,""]},"MinkowskiEngine.MinkowskiMaxPooling":{__init__:[16,2,1,""]},"MinkowskiEngine.MinkowskiNetwork":{MinkowskiNetwork:[18,1,1,""]},"MinkowskiEngine.MinkowskiNetwork.MinkowskiNetwork":{forward:[18,2,1,""],get_index_map:[18,2,1,""],init:[18,2,1,""],permute_feature:[18,2,1,""],permute_label:[18,2,1,""]},"MinkowskiEngine.MinkowskiNonlinearity":{MinkowskiCELU:[18,1,1,""],MinkowskiDropout:[18,1,1,""],MinkowskiModuleBase:[18,1,1,""],MinkowskiPReLU:[18,1,1,""],MinkowskiReLU:[18,1,1,""],MinkowskiSELU:[18,1,1,""],MinkowskiSigmoid:[18,1,1,""],MinkowskiSoftmax:[18,1,1,""],MinkowskiTanh:[18,1,1,""],MinkowskiThreshold:[18,1,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiCELU":{MODULE:[18,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiDropout":{MODULE:[18,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiModuleBase":{MODULE:[18,3,1,""],forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiPReLU":{MODULE:[18,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiReLU":{MODULE:[18,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiSELU":{MODULE:[18,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiSigmoid":{MODULE:[18,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiSoftmax":{MODULE:[18,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiTanh":{MODULE:[18,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiThreshold":{MODULE:[18,3,1,""]},"MinkowskiEngine.MinkowskiNormalization":{MinkowskiBatchNorm:[18,1,1,""],MinkowskiInstanceNorm:[18,1,1,""],MinkowskiInstanceNormFunction:[18,1,1,""],MinkowskiStableInstanceNorm:[18,1,1,""]},"MinkowskiEngine.MinkowskiNormalization.MinkowskiBatchNorm":{forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiNormalization.MinkowskiInstanceNorm":{forward:[18,2,1,""],reset_parameters:[18,2,1,""]},"MinkowskiEngine.MinkowskiNormalization.MinkowskiInstanceNormFunction":{backward:[18,2,1,""],forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiNormalization.MinkowskiStableInstanceNorm":{forward:[18,2,1,""],reset_parameters:[18,2,1,""]},"MinkowskiEngine.MinkowskiOps":{MinkowskiLinear:[18,1,1,""],cat:[18,4,1,""]},"MinkowskiEngine.MinkowskiOps.MinkowskiLinear":{forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiPReLU":{MODULE:[13,3,1,""],__init__:[13,2,1,""]},"MinkowskiEngine.MinkowskiPooling":{MinkowskiAvgPooling:[18,1,1,""],MinkowskiAvgPoolingFunction:[18,1,1,""],MinkowskiGlobalPooling:[18,1,1,""],MinkowskiGlobalPoolingFunction:[18,1,1,""],MinkowskiMaxPooling:[18,1,1,""],MinkowskiMaxPoolingFunction:[18,1,1,""],MinkowskiPoolingBase:[18,1,1,""],MinkowskiPoolingTranspose:[18,1,1,""],MinkowskiPoolingTransposeFunction:[18,1,1,""],MinkowskiSumPooling:[18,1,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiAvgPoolingFunction":{backward:[18,2,1,""],forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiGlobalPooling":{forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiGlobalPoolingFunction":{backward:[18,2,1,""],forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiMaxPooling":{forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiMaxPoolingFunction":{backward:[18,2,1,""],forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiPoolingBase":{forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiPoolingTranspose":{forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiPoolingTransposeFunction":{backward:[18,2,1,""],forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiPoolingTranspose":{__init__:[16,2,1,""]},"MinkowskiEngine.MinkowskiPruning":{MinkowskiPruning:[18,1,1,""],MinkowskiPruningFunction:[18,1,1,""]},"MinkowskiEngine.MinkowskiPruning.MinkowskiPruning":{forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiPruning.MinkowskiPruningFunction":{backward:[18,2,1,""],forward:[18,2,1,""]},"MinkowskiEngine.MinkowskiReLU":{MODULE:[13,3,1,""],__init__:[13,2,1,""]},"MinkowskiEngine.MinkowskiSELU":{MODULE:[13,3,1,""],__init__:[13,2,1,""]},"MinkowskiEngine.MinkowskiSigmoid":{MODULE:[13,3,1,""],__init__:[13,2,1,""]},"MinkowskiEngine.MinkowskiSoftmax":{MODULE:[13,3,1,""],__init__:[13,2,1,""]},"MinkowskiEngine.MinkowskiSumPooling":{__init__:[16,2,1,""]},"MinkowskiEngine.MinkowskiTanh":{MODULE:[13,3,1,""],__init__:[13,2,1,""]},"MinkowskiEngine.MinkowskiThreshold":{MODULE:[13,3,1,""],__init__:[13,2,1,""]},"MinkowskiEngine.RegionType":{CUSTOM:[3,3,1,""],HYBRID:[3,3,1,""],HYPERCROSS:[3,3,1,""],HYPERCUBE:[3,3,1,""]},"MinkowskiEngine.SparseTensor":{SparseTensor:[24,1,1,""]},"MinkowskiEngine.SparseTensor.SparseTensor":{C:[24,2,1,""],D:[24,2,1,""],F:[24,2,1,""],__init__:[24,2,1,""],coords:[24,2,1,""],cpu:[24,2,1,""],device:[24,2,1,""],dtype:[24,2,1,""],feats:[24,2,1,""],getKey:[24,2,1,""],get_device:[24,2,1,""],shape:[24,2,1,""],size:[24,2,1,""],stride:[24,2,1,""],tensor_stride:[24,2,1,""],to:[24,2,1,""]},"MinkowskiEngine.modules":{resnet_block:[19,0,0,"-"],senet_block:[19,0,0,"-"]},"MinkowskiEngine.modules.resnet_block":{BasicBlock:[19,1,1,""],Bottleneck:[19,1,1,""]},"MinkowskiEngine.modules.resnet_block.BasicBlock":{expansion:[19,3,1,""],forward:[19,2,1,""]},"MinkowskiEngine.modules.resnet_block.Bottleneck":{expansion:[19,3,1,""],forward:[19,2,1,""]},"MinkowskiEngine.modules.senet_block":{SEBasicBlock:[19,1,1,""],SEBottleneck:[19,1,1,""],SELayer:[19,1,1,""]},"MinkowskiEngine.modules.senet_block.SEBasicBlock":{forward:[19,2,1,""]},"MinkowskiEngine.modules.senet_block.SEBottleneck":{forward:[19,2,1,""]},"MinkowskiEngine.modules.senet_block.SELayer":{forward:[19,2,1,""]},"MinkowskiEngine.utils":{SparseCollation:[25,1,1,""],collation:[20,0,0,"-"],gradcheck:[20,0,0,"-"],sparse_quantize:[25,4,1,""],voxelization:[20,0,0,"-"]},"MinkowskiEngine.utils.SparseCollation":{__init__:[25,2,1,""]},"MinkowskiEngine.utils.collation":{SparseCollation:[20,1,1,""],sparse_collate:[20,4,1,""]},"MinkowskiEngine.utils.gradcheck":{gradcheck:[20,4,1,""]},"MinkowskiEngine.utils.voxelization":{fnv_hash_vec:[20,4,1,""],ravel_hash_vec:[20,4,1,""],sparse_quantize:[20,4,1,""]},"tests.broadcast":{TestBroadcast:[23,1,1,""]},"tests.broadcast.TestBroadcast":{test_broadcast:[23,2,1,""],test_broadcast_gpu:[23,2,1,""]},"tests.common":{data_loader:[23,4,1,""],get_coords:[23,4,1,""]},"tests.conv":{TestConvolution:[23,1,1,""],TestConvolutionTranspose:[23,1,1,""]},"tests.conv.TestConvolution":{test:[23,2,1,""],test_gpu:[23,2,1,""]},"tests.conv.TestConvolutionTranspose":{test:[23,2,1,""],test_gpu:[23,2,1,""]},"tests.coords":{Test:[23,1,1,""]},"tests.coords.Test":{test_coords_key:[23,2,1,""],test_coords_manager:[23,2,1,""],test_hash:[23,2,1,""]},"tests.norm":{TestNormalization:[23,1,1,""]},"tests.norm.TestNormalization":{test_inst_norm:[23,2,1,""],test_inst_norm_gpu:[23,2,1,""]},"tests.pool":{TestPooling:[23,1,1,""]},"tests.pool.TestPooling":{test_avgpooling:[23,2,1,""],test_avgpooling_gpu:[23,2,1,""],test_global_avgpool:[23,2,1,""],test_maxpooling:[23,2,1,""],test_sumpooling:[23,2,1,""],test_unpool:[23,2,1,""],test_unpooling_gpu:[23,2,1,""]},"tests.pruning":{TestPooling:[23,1,1,""]},"tests.pruning.TestPooling":{test_pruning:[23,2,1,""]},"tests.voxelization":{TestGPUVoxelization:[23,1,1,""]},"tests.voxelization.TestGPUVoxelization":{test:[23,2,1,""]},MinkowskiEngine:{Common:[18,0,0,"-"],CoordsKey:[5,1,1,""],CoordsManager:[5,1,1,""],KernelGenerator:[3,1,1,""],MinkowskiAvgPooling:[16,1,1,""],MinkowskiBatchNorm:[14,1,1,""],MinkowskiBroadcast:[18,0,0,"-"],MinkowskiBroadcastAddition:[2,1,1,""],MinkowskiBroadcastConcatenation:[2,1,1,""],MinkowskiBroadcastMultiplication:[2,1,1,""],MinkowskiCELU:[13,1,1,""],MinkowskiConvolution:[18,0,0,"-"],MinkowskiConvolutionTranspose:[4,1,1,""],MinkowskiCoords:[18,0,0,"-"],MinkowskiDropout:[13,1,1,""],MinkowskiFunctional:[18,0,0,"-"],MinkowskiGlobalPooling:[16,1,1,""],MinkowskiInstanceNorm:[14,1,1,""],MinkowskiMaxPooling:[16,1,1,""],MinkowskiNetwork:[18,0,0,"-"],MinkowskiNonlinearity:[18,0,0,"-"],MinkowskiNormalization:[18,0,0,"-"],MinkowskiOps:[18,0,0,"-"],MinkowskiPReLU:[13,1,1,""],MinkowskiPooling:[18,0,0,"-"],MinkowskiPoolingTranspose:[16,1,1,""],MinkowskiPruning:[18,0,0,"-"],MinkowskiReLU:[13,1,1,""],MinkowskiSELU:[13,1,1,""],MinkowskiSigmoid:[13,1,1,""],MinkowskiSoftmax:[13,1,1,""],MinkowskiSumPooling:[16,1,1,""],MinkowskiTanh:[13,1,1,""],MinkowskiThreshold:[13,1,1,""],RegionType:[3,1,1,""],SparseTensor:[18,0,0,"-"],modules:[19,0,0,"-"],utils:[20,0,0,"-"]},tests:{broadcast:[23,0,0,"-"],common:[23,0,0,"-"],conv:[23,0,0,"-"],coords:[23,0,0,"-"],norm:[23,0,0,"-"],pool:[23,0,0,"-"],pruning:[23,0,0,"-"],voxelization:[23,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"5cm":1,"abstract":18,"boolean":18,"break":10,"case":[10,12,23,24],"class":[2,4,5,6,7,10,11,13,14,15,16,18,19,20,23,24],"default":[20,24,25],"enum":18,"export":12,"final":[7,9],"float":[20,25],"function":[7,9,11,15,18,19,20],"import":[1,6,7,15],"int":[2,4,14,16,20,24,25],"new":[6,7,18,24],"return":[5,6,7,15,16,18,20],"static":18,"super":[7,15],"true":[4,14,15,16,18,20,23,25],"try":12,"while":[18,19],For:[1,2,4,12,15,16,18],The:[0,2,4,6,7,9,10,11,12,15,18,20,24],Then:[6,10,12,15],Use:17,Using:15,__init__:[2,3,4,5,6,7,13,14,15,16,24,25],_build:0,_znk13coordsmanagerilh5eie8tostringb5cxx11ev:12,abc:18,abl:8,about:20,abov:[4,6,10,12,17,18,24],absolut:20,abstractminkowskibroadcast:18,accept:18,access:[6,18,24],accordingli:6,accur:[5,13,14,25],achiev:10,across:1,activ:[12,13,15,17,18],adapt:6,add:[2,18],addit:[2,8,10,18,24],address:20,adopt:10,affin:[14,18],after:[9,15,20],afterward:[18,19],again:12,against:20,algorithm:[1,9],alia:[13,18,24],all:[1,2,4,6,8,10,11,15,16,18,19,20,24],allclos:20,allow:8,along:12,alreadi:24,also:[8,9,10,18],alter:[20,25],altern:[16,18],although:[18,19],amort:1,anaconda:[12,17],analyt:20,ani:[18,20],anoth:[10,12],apart:4,api:[11,15],apidoc:0,append:[7,9],appli:11,applic:[10,12],apt:15,arbitrari:[8,10],arbitrarili:10,arg:[2,4,13,14,16,18,20,24,25],argument:[2,4,18],arr:20,arrai:[9,24],art:10,associ:[10,18,20,24,25],assum:12,atol:20,attribut:18,auto:[11,15],autograd:18,automat:[9,12,24],averag:[1,6,16,18],awai:[4,16,18],axes:10,axi:[3,4,10,16],axis_typ:[3,4,18],b_1:[10,18,24],b_i:[10,18,24],b_n:[10,18,24],backward:[1,7,18],base:[18,19,20,23],bashrc:12,basic:[10,18,24],basicblock:19,batch:[5,6,9,10,11,14,16,18,20,24,25],batch_index:23,batch_indic:[5,18],batch_siz:[16,23],batchnorm1d:[14,18],becaus:20,becom:10,befor:9,begin:[10,18,24],behaviour:20,being:8,below:[20,25],benchmark:[9,11],between:20,bia:[4,18],bioconda:[12,15,17],bmatrix:[10,18,24],bn1:15,bn2:15,bn_momentum:19,bool:[4,16,20,25],bottleneck:19,broadcast:[2,15,18,21],cach:24,call:[9,12,18,19],can:[1,2,7,8,9,10,12,15,18,24],cannot:18,cardin:[16,18],care:[18,19],cat:18,cdot:[2,10,18,24],cell:[20,25],celu:[13,18],center:[10,18],chang:[1,6,20],channel:[4,16,18,19],check:[20,25],checkout:15,classif:11,clean:12,clone:[15,17],cloud:16,cluster:12,code:12,collat:[18,21,25],color:[8,9],column:[18,24],com:[15,17],common:[10,11,15,21],comon:3,complet:[6,7,8,9],comput:[10,15,16,18,19,20,24],concaten:[2,9,10,18,24],conda:17,condit:20,config:9,consist:[0,8,18,24],constant:[16,18],content:21,context:18,contribut:[16,18],conv1:15,conv2:15,conv:[1,21],conv_transpos:18,convent:[10,16,18],convert:[6,20],convert_region_typ:18,convert_to_int_list:18,convert_to_int_tensor:18,convnet:[10,15,18],convolut:[3,4,8,11,15,16,18],coo:[10,18,24],coord:[5,6,7,9,15,16,18,20,21,24,25],coordin:[2,4,8,9,10,11,16,18,20,24,25],coordinates_:9,coords_kei:[5,18,24],coords_man:[5,18],coords_manag:[18,24],coordskei:[4,11,16,18,24],coordsmanag:[11,18,24],copi:[2,11,18],correct:[12,17],correspond:[7,18],could:[6,24],cppextens:12,cpu:[12,18,24],cpu_onli:17,creat:[3,6,7,9,12,17,20,24],criterion:[6,7,15],cross:3,crossentropyloss:[6,7,15],crucial:10,ctx:18,cublas_v2:12,cuda:[7,15,24],cudatoolkit:[12,17],current:[7,9,10,18,24],custom:[3,4,16,18],cvpr:[10,15],d_f:[6,18,20,24,25],data:[6,7,9,10,15,23],data_load:[6,7,15,23],ddot:[10,18,24],debug:20,deconvolut:[4,18],def:[6,7,15],defin:[2,3,4,7,8,10,15,16,18,19],defini:[4,18],definit:[4,18],demo:[6,11],dens:[10,16,18],depend:[16,17,18],design:20,detail:[3,7,8,9,14,15,18],dev:15,devic:[6,9,11,18,24],did:18,differ:[1,3,4,12,18,20,24],differenti:[11,15,18],dilat:[1,3,4,5,6,7,10,15,16,18,19],dim:[7,18],dimens:[1,2,3,4,6,7,10,14,15,16,18,19,20,24,25],dimension:[10,16,18,20,24,25],directori:[12,15,17],dirnam:12,disassoci:[10,18,24],divid:[16,18],document:[17,20],doe:[4,16,18,20,25],doesn:12,doing:[9,24],done:[2,9,18,24],doubl:20,doubletensor:24,down:10,download:[9,17],downsampl:19,dropout:[13,18],dtype:[18,24],due:[10,18],duplic:18,dure:[6,7,9,18],dynam:[15,24],each:[0,1,3,4,6,7,10,16,18,20,24,25],eah:[20,25],easi:6,effect:10,either:[20,25],elem:16,element:[2,4,16,18,20],empti:10,enabl:17,encompass:10,encount:12,end:[10,18,24],enforce_cr:[5,18],engin:[1,10,11],enough:12,entir:12,enumer:18,environ:17,eps:[14,18,20],equal:[18,24],equat:[10,18,24],equival:[16,18],error:12,even:[4,10,18],everi:[18,19],exact:20,exampl:[2,4,7,8,9,11,12,16,17,20,25],examplenetwork:[6,7,15],except:20,excess:12,exist:[10,18],expand:20,expans:19,explicitli:12,extens:10,extract:[6,7,10],face:12,fail:[12,20],failur:20,fals:[1,3,4,5,6,7,15,18,20,25],fast:12,fatal:12,feat:[6,7,9,15,18,20,24,25],featrues_:9,featur:[2,5,7,8,9,10,11,16,18,20,24,25],feautr:14,fed:7,feed:[1,7,9],feel:[12,15],ffi:18,field:10,file:0,file_nam:9,find:12,finit:20,first:[1,2,3,6,7,9,10,15,16,18,24],flag:17,float32:18,floattensor:[20,24],floor:9,fnv64:20,fnv:[20,25],fnv_hash_vec:20,follow:[1,7,10,12,15,17,18],format:[0,10,18,24],former:[18,19],formula:18,fortun:15,forward:[1,6,7,9,18,19],found:12,frac:[4,16,18],free:[12,15,18],from:[4,6,7,9,10,18,20,24],func:20,fundament:10,gather:7,gener:[1,4,6,8,11,12,15,18,20,25],get:[6,7,9,12,18],get_coo_broadcast_coord:[5,18],get_coord:[5,18,23],get_coords_kei:[5,18],get_coords_size_by_coords_kei:[5,18],get_devic:[18,24],get_index_map:18,get_kernel:[3,18],get_kernel_map:[5,18],get_kernel_volum:18,get_mapping_by_coords_kei:[5,18],get_mapping_by_tensor_strid:[5,18],get_postfix:18,get_row_indices_per_batch:[5,18],getkei:[5,18,24],gettensorstrid:[5,18],git:[15,17],github:[12,15,17],give:20,given:[3,4,16,18,20,25],glob_coords_kei:18,global:[2,8,18],googl:[12,15,17],googlegroup:15,gpu:[11,15],grad_out_feat:18,gradcheck:[18,21],gradient:[18,20],graph:[15,24],grid:[20,25],handl:[10,18,24],has:[4,10,18,20],has_bia:[1,4,6,7,15,18],hash:[20,24,25],hash_typ:[20,25],have:[7,8,10,12,15,18],help:[5,13,14,20,25],high:16,higher:[10,15],highli:15,hold:20,home:12,hook:[18,19],hotel:[11,17],how:6,howev:[8,10,12,16,18],hpp:12,http:[15,17],hybrid:[3,18],hypercross:[3,18],hypercub:[3,10,18],hyperrectangl:[20,25],ident:[4,16],ignor:[0,18,19,20,25],ignore_label:[20,25],imag:[2,4,10,16],implement:[4,18],in_channel:[1,4,6,7,15,18],in_coords_kei:[5,18],in_feat:[6,7,15,18],in_feat_channel:23,in_featur:18,in_tensor_strid:[5,18],includ:0,ind:9,index:[0,9,10,11,16,18,24],indic:[5,10,18,20,24,25],indoor:[9,15,17,20,25],ineffici:10,inform:[15,20],init:18,initi:[4,5,13,14,18,25],initialize_enforc:[5,18],initialize_nthread:18,inplac:15,inplan:19,input:[2,4,6,7,8,9,10,14,15,16,18,20,25],input_featur:18,input_features_glob:18,input_glob:18,insid:[18,24],instal:[9,12],instanc:[10,14,18,19,24],instanti:18,instead:[10,18,19],instruct:[0,17],integ:[20,25],interact:9,interest:10,intern:[10,18,24],intro:11,inttensor:[3,24],investig:10,is_classif:23,is_doubl:20,is_transpos:[3,5,18],issu:[11,15],iter:7,its:10,itself:0,job:12,kei:[5,18,24],kernel:[1,4,8,10,11,15,16,18],kernel_gener:[4,16,18],kernel_s:[1,3,4,5,6,7,15,16,18],kernelgener:[3,4,16,18],known:10,kwarg:[13,18],label:[5,6,7,9,15,18,20,25],label_tensor_strid:[5,18],land:0,larg:1,last:16,latter:[18,19],layer:[2,4,7,8,11,14,15,16,18],lceil:[4,18],lead:12,least:[4,16],left:[4,18],length:[4,16,20,25],leq:20,less:20,let:[6,7,10],libopenbla:15,librari:[10,11,12,15],libsparsehash:15,like:[12,15,20],limit:[12,20,25],limit_numpoint:[20,25],line:17,linear:[8,15],list:[3,4,5,9,10,15,16,18,20,24,25],list_of_row_indic:[5,18],load:[9,11],load_fil:9,loader:[7,9,15],local:12,loss:[6,7,15],lvert:20,mai:[0,16,18],make:[0,4,12,15,24],makefil:17,manag:[11,24],mani:[10,18],map:[1,15,18],markdown:0,mathbb:[4,10,18],mathbf:[2,4,10,16,18,24],mathcal:[2,4,10,16,18],matric:10,matrix:[3,4,10,16,18,20,24,25],max:[9,16,18],max_:[16,18],max_label:[5,18,23],mean:7,memori:20,mesh:[2,4,16],method:[3,12],methodnam:23,might:12,min:[6,20],mini:[7,10,18,24],mink:[12,15,17],minkowski:[10,11,17],minkowskiavgpool:[11,18],minkowskiavgpoolingfunct:18,minkowskibatchnorm:[6,7,11,15,18],minkowskibroadcast:[11,21],minkowskibroadcastaddit:[11,18],minkowskibroadcastconcaten:[11,18],minkowskibroadcastfunct:18,minkowskibroadcastmultipl:[11,18],minkowskicelu:[11,18],minkowskiconvolut:[1,6,7,11,15,21],minkowskiconvolutionbas:18,minkowskiconvolutionfunct:18,minkowskiconvolutiontranspos:[1,11,18],minkowskiconvolutiontransposefunct:18,minkowskicoord:21,minkowskidropout:[11,18],minkowskiengin:[1,2,3,4,5,6,7,9,10,12,13,14,15,16,17,24,25],minkowskifunct:21,minkowskiglobalpool:[2,6,7,11,15,18],minkowskiglobalpoolingfunct:18,minkowskiinstancenorm:[11,18],minkowskiinstancenormfunct:18,minkowskilinear:[6,7,15,18],minkowskimaxpool:[11,18],minkowskimaxpoolingfunct:18,minkowskimodulebas:18,minkowskinetwork:[7,15,21],minkowskinonlinear:[11,21],minkowskinorm:[11,21],minkowskiop:21,minkowskipool:[11,21],minkowskipoolingbas:18,minkowskipoolingtranspos:[11,18],minkowskipoolingtransposefunct:18,minkowskiprelu:[11,18],minkowskiprun:21,minkowskipruningfunct:18,minkowskirelu:[6,7,11,15,18],minkowskiselu:[11,18],minkowskisigmoid:[11,18],minkowskisoftmax:[11,18],minkowskistableinstancenorm:18,minkowskisumpool:[11,18],minkowskitanh:[11,18],minkowskithreshold:[11,18],minu:[18,24],miscellan:11,miscellanea:11,model:9,modifi:[0,12],modul:[6,12,13,21],momentum:[14,18],more:[7,8,9,10,14,15,18,20],most:[4,10,18,24],multi:[8,11,12,15],multipl:[2,10,11,18],multipli:[2,18],must:[4,15,16,18,24],natur:[10,20],ndarrai:[20,25],necessarili:10,need:[7,15,18,19,24],needs_input_grad:18,net:[1,6,7,15],net_metadata:18,network:[1,2,4,6,7,8,9,10,16,18,24],neural:[8,10,15,18,24],next:7,non:[4,10,16,18],none:[3,4,5,16,18,19,20,24,25],norm:21,normal:[8,9,14,18],note:[1,6,10,18],nueral:1,num_devic:7,num_featur:[14,18],num_nonzero:18,num_thread:[5,18],number:[1,3,4,8,10,12,16,18,20,24,25],numer:20,numpi:[12,15,17,18,20,24,25],nvcc:[12,15],o3d:9,object:[18,20,24],odd:18,offset:[1,3,4,10,16,18],onc:[9,17],one:[7,12,16,18,19,24],onli:[1,2,10,18],open3d:9,openbla:[12,15,17],oper:[2,10,15,18],operation_typ:18,operation_type_to_int:18,operationtyp:18,optim:[6,7,15],option:[3,4,12,16,20,25],origin:[2,10,16,18],other:[1,18,20],otherwis:18,out:[2,4,10,15,16,18],out_channel:[1,4,6,7,15,18],out_coords_kei:[4,5,16,18],out_feat:[6,7,15,18],out_featur:[7,18],out_grad:18,out_tensor_strid:[5,18],output:[2,4,6,7,10,15,16,18],over:1,overlap:20,overridden:[18,19],packag:[15,21,24],page:[0,1,11,12,15],parallel:[7,9,12],parallel_appli:7,part:10,pass:[1,18,19],path:[9,12,17],pattern:7,pcd:9,pdf:15,per:[5,16,18],percept:10,perceptron:8,perform:[10,18,19],permute_featur:18,permute_label:[5,18],perturb:20,pip:[0,9,15],plane:19,pleas:[3,6,7,8,9,12,15,16,18,20,24,25],point:[1,8,9,10,16,18,20,24,25],pointnet:11,pool:[8,15,16,18,21],posit:[20,25],post:9,precis:20,pred:9,predefin:10,predict:9,prelu:[13,18],prep_arg:18,prepar:9,pretrain:17,print:15,problem:12,process:[1,8,9,24],properti:[18,24],propos:10,proven:10,provid:[3,4,10,12,15,16,18,24],prune:21,pseudo:9,put:[18,24],py3:[12,15,17],python3:15,python:[9,12,17,20],pytorch:[7,11,12,14,15,17,18],quantiz:[9,15,20,25],quantization_s:[20,25],quantized_coord:9,question:15,quick:11,rais:20,raise_except:20,rang:[4,6,7,18],rank:9,rare:12,rate:4,ravel:[20,25],ravel_hash_vec:20,rceil:[4,18],read_point_cloud:9,readm:0,recip:[18,19],recommend:15,recommonmark:0,rectangular:3,recurr:10,reduc:[2,16,18],reduct:[2,18,19],refer:[3,6,7,8,9,16,18,24],region:[3,18],region_offset:[3,4,16,18],region_typ:[3,4,5,18],regiontyp:[4,11,16,18],regist:[18,19],reinstal:12,rel:20,relax:10,relu:[13,15,18],replic:7,replica:11,report:1,repositori:17,repres:[18,24],represent:[10,18,24],request:15,requir:4,requires_grad:20,research:10,reset_paramet:[14,18],resnet_block:[18,21],rest:7,restructuredtext:0,result:17,retriev:18,return_index:[20,25],reus:[1,18,24],right:[4,18],rnn:10,room:[1,11,17],root:15,rotat:9,row:[5,18],rst:0,rtol:20,run:[9,12,18,19],runtest:23,rvert:20,same:[1,2,10,15,18,20,24],satisfi:20,save:[10,18,24],save_ctx:18,scan:10,scannet:[1,9],search:11,sebasicblock:19,sebottleneck:19,second:[1,2,10,18],see:[5,9,12,13,14,17,18,25],seed:23,segment:[10,11,15],selay:19,self:[5,6,7,13,14,15,25],selu:[13,18],semant:[10,11,15,17],senet_block:[18,21],sequenti:[1,6,7],seri:8,set:[1,4,7,9,10,12,18,20],setkei:[5,18],settensorstrid:[5,18],setup:[12,15,17,21],shallow:6,shape:[2,3,4,10,15,16,18,24],share:20,should:[3,4,9,16,18,19],show:6,side:[9,20,25],sigmoid:[13,18],signatur:[5,13,14,25],silent:[18,19],similar:7,simpli:[10,18,24],sinc:[18,19],singl:[7,12],sinput:9,size:[1,3,4,6,8,10,16,18,20,24,25],small:[1,20],snippet:12,softmax:[13,18],solv:12,some:[9,10,12],sometim:12,sourc:0,soutput:9,sp_tensor:[5,18],space:[2,3,4,10,16,18,20,24,25],spars:[2,4,6,7,8,9,11,14,15,16,18,20,24],sparse_col:[9,20],sparse_quant:[9,11,15,20],sparse_tensor:18,sparsecol:[11,20],sparseconvnet:1,sparsehash:[12,15,17],sparsetensor:[5,6,7,9,10,11,15,21],sparsiti:10,spatial:[4,8,10,14,15,16,18,24],spatio:[10,15],special:[8,10],specif:[4,10,16],specifi:4,speech:10,speed:[],sphinx_markdown_t:0,sphinx_rtd_them:0,src:12,standard:[15,18,24],stanfordvl:[15,17],start:11,state:10,step:7,store:18,str:[20,25],stride:[1,3,4,5,6,7,8,10,15,16,18,19,24],subclass:[18,19],submanifold:10,submit:[12,15],submodul:21,subpackag:21,subtract:[9,20],sudo:15,sum:[16,18],sum_:[4,10,16,18],support:[7,15],sure:[4,12,15,24],symbol:12,system:12,system_error:12,take:[1,2,7,9,18,19,20],tanh:[13,18],target:7,target_devic:7,target_tensor_strid:[5,18],task:10,tempor:[10,15],tensor:[1,2,4,6,7,8,9,11,14,15,16,18,20,24,25],tensor_strid:[3,4,5,16,18,24],test:[1,21],test_avgpool:23,test_avgpooling_gpu:23,test_broadcast:23,test_broadcast_gpu:23,test_coords_kei:23,test_coords_manag:23,test_global_avgpool:23,test_gpu:23,test_hash:23,test_inst_norm:23,test_inst_norm_gpu:23,test_maxpool:23,test_prun:23,test_sumpool:23,test_unpool:23,test_unpooling_gpu:23,testbroadcast:23,testcas:23,testconvolut:23,testconvolutiontranspos:23,testgpuvoxel:23,testnorm:23,testpool:23,text:[2,4,10,16,18],texttt:20,than:10,them:[18,19],thi:[0,1,2,4,6,7,8,9,10,12,16,18,19,20,24],think:8,those:4,thread:[12,15],threshold:[13,18],thrid:3,through:7,thrust:12,thu:[1,6,10,16,18],time:[1,2,3,4,6,10,16,18,20,24,25],titan:1,toctre:0,toler:20,top:[9,17],torch:[3,6,7,13,14,15,18,19,20,24,25],torchvis:[12,15,17],track_running_stat:[14,18],tradit:10,train:[6,9,11,15],transform:8,transpos:[4,5,16,18],treat:[18,24],troubl:12,tupl:[7,15,18,20],two:3,txt:15,type:[3,5,13,14,16,18,20,25],typic:[2,10,18],ubuntu:15,uncom:17,undefin:12,understand:24,uniqu:[5,18],unittest:23,unpool:[15,16,18],up_strid:18,upsampl:4,usag:[12,15,20,25],use:[1,7,10,12,15,18,24],use_feat:18,used:[1,2,4,7,16,18,20,25],uses:[3,4,8,12,15,16],using:[6,12],usr:12,util:[9,11,15,18,21],valid:4,valu:[2,18,20,25],vari:[16,18],variabl:12,variou:1,vdot:[10,18,24],vector:[2,6,10,18,24],veri:6,versa:6,version:[15,17,18,24],via:[18,20,24],vice:6,virtual:17,vision:10,visit:15,visual:9,volum:[16,18],voxel:[1,9,15,18,21,25],voxel_s:9,want:[20,25],warn:0,weight:[9,10,11,17],well:1,were:18,what:24,when:[3,4,6,9,10,12,16,17,18,20,24],where:[2,3,4,8,10,16,18,20,24,25],wherea:1,whether:[18,20],which:[10,12,18,24],wise:[2,18],within:[10,15,16,18,19,24],without:[12,15],work:[10,11,12],would:[3,15],wrap:9,wrapper:6,write:0,x_1:[10,18,24],x_i:[10,18,24],x_n:[10,18,24],you:[0,4,7,8,9,12,15,17,20,24,25],your:[12,15],zero:[16,18],zero_grad:6,zip:[7,9]},titles:["Documentation with Sphinx","Benchmark","MinkowskiBroadcast","Miscellaneous Classes","MinkowskiConvolution","Coordinate Management","Working with Pytorch Layers","Multi-GPU Training","PointNet","Semantic Segmentation","Generalized Sparse Convolution","Welcome to MinkowskiEngine\u2019s documentation!","Common Issues","MinkowskiNonlinearities","MinkowskiNormalization","Minkowski Engine","MinkowskiPooling","Quick Start","MinkowskiEngine package","MinkowskiEngine.modules package","MinkowskiEngine.utils package","MinkowskiEngine","setup module","tests package","SparseTensor","Utility Functions and Classes"],titleterms:{"class":[3,25],"function":25,"new":12,after:12,all:[7,12],anaconda:15,appli:7,automat:0,backward:15,batch:7,benchmark:1,broadcast:23,classif:6,collat:20,common:[12,18,23],compil:[12,15,17],conda:[12,15],content:[0,11,18,19,20,23],conv:23,convolut:[1,10],coord:23,coordin:5,coordskei:5,coordsmanag:5,copi:7,cpu:17,creat:15,cuda:12,cuda_hom:12,curat:0,custom:[0,15],depend:0,devic:7,discuss:15,document:[0,11,15],due:12,engin:15,environ:[12,15],exampl:[6,15],experi:1,failur:12,featur:[6,15],file:12,forc:12,forward:15,from:12,gener:[0,3,10],gpu:7,gradcheck:20,hotel:9,html:0,incorrect:12,indic:11,instal:[0,15,17],issu:12,kernel:3,layer:[1,6],list:[0,12],load:7,manag:5,memori:12,minkowski:15,minkowskiavgpool:16,minkowskibatchnorm:14,minkowskibroadcast:[2,18],minkowskibroadcastaddit:2,minkowskibroadcastconcaten:2,minkowskibroadcastmultipl:2,minkowskicelu:13,minkowskiconvolut:[4,18],minkowskiconvolutiontranspos:4,minkowskicoord:18,minkowskidropout:13,minkowskiengin:[11,18,19,20,21],minkowskienginestanford:[],minkowskifunct:18,minkowskiglobalpool:16,minkowskiinstancenorm:14,minkowskimaxpool:16,minkowskinetwork:18,minkowskinonlinear:[13,18],minkowskinorm:[14,18],minkowskiop:18,minkowskipool:[16,18],minkowskipoolingtranspos:16,minkowskiprelu:13,minkowskiprun:18,minkowskirelu:13,minkowskiselu:13,minkowskisigmoid:13,minkowskisoftmax:13,minkowskisumpool:16,minkowskitanh:13,minkowskithreshold:13,miscellan:3,mismatch:12,modul:[0,18,19,20,22,23],multi:7,multipl:7,network:[15,17],norm:23,object:12,onli:[0,17],oom:12,out:12,packag:[18,19,20,23],pointnet:8,pool:23,prune:23,python:15,pytorch:6,quick:[15,17],refer:[10,15],regiontyp:3,replica:7,requir:15,resnet_block:19,room:9,run:[15,17],segment:[9,17],semant:9,senet_block:19,setup:[1,22],simpl:1,singl:1,spars:10,sparse_quant:25,sparsecol:25,sparsetensor:[18,24],sphinx:0,start:[15,17],submodul:[18,19,20,23],subpackag:18,tabl:11,tensor:10,test:23,train:7,unet:1,upgrad:12,using:15,util:[20,25],version:12,virtual:[12,15],voxel:[20,23],websit:0,weight:7,welcom:11,work:6}})