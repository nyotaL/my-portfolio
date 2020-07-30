// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.data;

import com.google.sps.data.Comment;
import java.util.List;

/** An item on a todo list. */
public final class CommentIdentity {

  List<Comment> comments;
  String email;

  public CommentIdentity(List<Comment> comments, String email) {
    this.comments = comments;
    this.email = email;
  }
}