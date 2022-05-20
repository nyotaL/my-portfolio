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

public final class Comment {

  private final long id;
  private final String title;
  private final long timestamp;
  private final String user;
  private final String rate;
  private final String email;

  public Comment(long id, String title, long timestamp, String user, String rate, String email) {
    this.id = id;
    this.title = title;
    this.timestamp = timestamp;
    this.user = user;
    this.rate = rate;
    this.email = email;
  }
}